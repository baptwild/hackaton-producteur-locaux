export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://hackaton-producteur-locaux.vercel.app/sitemap.xml",
    };
}