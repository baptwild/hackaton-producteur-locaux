import requests
from bs4 import BeautifulSoup
import json
import time

URL = "https://www.pagesjaunes.fr/recherche/quiquoiou"

params = {
    "quoiqui": "maraicher",
    "ou": "Grenoble",
    "page": 1
}

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122 Safari/537.36",
    "Accept-Language": "fr-FR,fr;q=0.9"
}

session = requests.Session()

response = session.get(URL, headers=headers, params=params)

print("Status:", response.status_code)

soup = BeautifulSoup(response.text, "html.parser")

# JSON Next.js
data_script = soup.find("script", {"id": "__NEXT_DATA__"})

if not data_script:
    print("JSON introuvable")
    exit()

data = json.loads(data_script.string)

# navigation dans la structure
results = data["props"]["pageProps"]["initialState"]["search"]["results"]["items"]

maraichers = []

for r in results:

    name = r.get("denomination", "")
    address = r.get("address", {}).get("label", "")
    phone = r.get("mainPhone", {}).get("number", "")

    maraichers.append({
        "name": name,
        "address": address,
        "phone": phone,
        "city": "Grenoble",
        "category": "maraicher"
    })

    print("Trouvé :", name)

with open("maraichers_grenoble.json", "w", encoding="utf-8") as f:
    json.dump(maraichers, f, ensure_ascii=False, indent=2)

print("Total :", len(maraichers))