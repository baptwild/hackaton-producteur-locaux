import Head from 'next/head';

export default function FAQ() {
  const faqs = [
    {
      q: 'Comment commander ?',
      a: 'Notre plateforme facilite la mise en relation. Contactez le producteur directement via son profil.',
    },
    {
      q: 'Les produits sont-ils tous bio ?',
      a: 'Tous nos producteurs sont sélectionnés pour leurs pratiques écoresponsables (Bio, Nature & Progrès, ou local raisonné).',
    },
    {
      q: 'Comment puis-je être sûr de la qualité des produits ?',
      a: 'Nous collaborons uniquement avec des producteurs locaux certifiés. Vous pouvez consulter leurs certifications sur leur page de profil.',
    },
    {
      q: 'Quels types de produits puis-je trouver à Grenoble ?',
      a: 'À Grenoble, vous trouverez une vaste sélection de fruits, légumes, produits laitiers, miel et cosmétiques naturels, tous provenant de producteurs locaux.',
    },
    {
      q: 'Y a-t-il un moyen de récupérer ma commande ?',
      a: 'Certains producteurs proposent des points de retrait locaux à Grenoble. Vérifiez les options sur la page du producteur concerné.',
    },
    {
      q: 'Comment fonctionnent les paniers hebdomadaires ?',
      a: 'De nombreux producteurs offrent l’option de paniers hebdomadaires où vous pouvez recevoir des produits frais chaque semaine selon les saisons.',
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
          <script type="application/ld+json">
            {JSON.stringify(jsonLd)}
          </script>
        </Head>
        <div className='container section-padding' style={{ maxWidth: '800px' }}>
          <h1>Questions Fréquemment Posées</h1>
          <div style={{ marginTop: '3rem' }}>
            {faqs.map((f, i) => (
                <div key={i} className='faq-item'>
                  <h2 className='faq-question'>{f.q}</h2>
                  <p>{f.a}</p>
                </div>
            ))}
          </div>
        </div>
      </>
  );
}