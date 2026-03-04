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
  ]

  return (
    <div className='container section-padding' style={{ maxWidth: '800px' }}>
      <h1>Questions Fréquentes</h1>
      <div style={{ marginTop: '3rem' }}>
        {faqs.map((f, i) => (
          <div key={i} className='faq-item'>
            <span className='faq-question'>{f.q}</span>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
