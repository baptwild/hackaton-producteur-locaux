import Head from 'next/head';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: 'Comment commander à un producteur local ?',
      a: 'Notre plateforme facilite la mise en relation. Contactez directement le producteur de Grenoble via son profil pour passer votre commande. Chaque producteur a ses propres modalités de commande indiquées sur sa page.',
    },
    {
      q: 'Les produits proposés par Les Voisins de Panier sont-ils tous bio ?',
      a: 'Tous nos producteurs de la région Auvergne-Rhône-Alpes sont sélectionnés pour leurs pratiques écoresponsables (Bio, Nature & Progrès, ou local raisonné) afin de garantir la qualité des produits proposés.',
    },
    {
      q: 'Comment être sûr de la qualité des produits des producteurs à Grenoble ?',
      a: 'Nous collaborons uniquement avec des producteurs locaux certifiés dans la région. Vous pouvez consulter leurs certifications sur leur page de profil sur notre site. Pour en savoir plus sur chaque producteur, visitez leur section respective.',
    },
    {
      q: 'Quels types de produits locaux puis-je trouver à Grenoble ?',
      a: 'À Grenoble, vous aurez accès à une vaste sélection de fruits, légumes, produits laitiers, miel, et cosmétiques naturels, tous provenant de producteurs locaux engagés. Pour découvrir tous les produits, rendez-vous sur la page [Produits](#) de notre plateforme.',
    },
    {
      q: 'Y a-t-il un moyen de récupérer ma commande ?',
      a: 'Certains producteurs proposent des points de retrait locaux à Grenoble. Vérifiez les options sur la page du producteur concerné ou contactez-les directement pour plus d\'informations.',
    },
    {
      q: 'Comment fonctionnent les paniers hebdomadaires ?',
      a: 'De nombreux producteurs offrent l’option de paniers hebdomadaires où vous pouvez recevoir des produits frais chaque semaine selon les saisons. Consultez les pages des producteurs pour plus de détails sur leurs offres.',
    },
    {
      q: 'Les Voisins de Panier propose-t-il des livraisons à domicile à Grenoble ?',
      a: 'Oui, plusieurs de nos producteurs offrent des options de livraison à domicile dans la métropole de Grenoble. Les informations de livraison sont disponibles sur leurs pages respectives.',
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  };

  return (
      <>
        <Head>
          <title>Questions Fréquentes - Les Voisins de Panier</title>
          <meta name="description" content="Questions fréquentes concernant Les Voisins de Panier. Découvrez comment commander, la qualité des produits locaux, et plus encore." />
          <script type="application/ld+json">
            {JSON.stringify(jsonLd)}
          </script>
        </Head>
        <div className="container section-padding" style={{ maxWidth: '800px' }}>
          <h1>Questions Fréquemment Posées</h1>
          <div style={{ marginTop: '3rem' }}>
            {faqs.map((f, i) => (
                <div key={i} className="faq-item">
                  <h2 className="faq-question">{f.q}</h2>
                  <p>{f.a}</p>
                </div>
            ))}
          </div>
        </div>
      </>
  );
};

export default FAQ;