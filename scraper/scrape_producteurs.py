import requests
from bs4 import BeautifulSoup
import json
import time

BASE_URL = "https://hackaton-producteur-locaux.vercel.app"
LIST_URL = BASE_URL + "/producteurs"

headers = {
    "User-Agent": "Mozilla/5.0"
}

session = requests.Session()

print("Chargement liste producteurs...")

r = session.get(LIST_URL, headers=headers)
soup = BeautifulSoup(r.text, "html.parser")

links = []

for a in soup.select("a[href^='/producteur/']"):
    href = a.get("href")
    if href not in links:
        links.append(href)

print("Producteurs trouvés :", len(links))

producteurs = []

for link in links:

    url = BASE_URL + link
    print("Scraping :", url)

    r = session.get(url, headers=headers)
    soup = BeautifulSoup(r.text, "html.parser")

    # nom
    name = soup.find("h1")
    name = name.text.strip() if name else ""

    # description
    desc = soup.select_one("p.text-large")
    description = desc.text.strip() if desc else ""

    address = ""
    phone = ""
    email = ""
    city = ""

    for p in soup.select(".contact-aside p"):

        txt = p.text.strip()

        if "📍" in txt:
            address = txt.replace("📍", "").strip()
            city = address.split(",")[-1].strip() if "," in address else address

        if "📞" in txt:
            phone = txt.replace("📞", "").strip()

        if "📧" in txt:
            email = txt.replace("📧", "").strip()

    producteurs.append({
        "name": name,
        "description": description,
        "city": city,
        "email": email,
        "phone": phone
    })

    time.sleep(1)

with open("producteurs_demo.json", "w", encoding="utf-8") as f:
    json.dump(producteurs, f, ensure_ascii=False, indent=2)

print("Scraping terminé :", len(producteurs))