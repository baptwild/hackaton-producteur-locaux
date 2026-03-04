export default function sitemap() {
    const baseUrl = "https://hackaton-producteur-locaux.vercel.app";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/producteurs`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
        },
    ];
}