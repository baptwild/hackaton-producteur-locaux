import Link from 'next/link'

interface BreadcrumbStep {
  label: string
  href?: string
}

interface BreadcrumbProps {
  steps: BreadcrumbStep[]
}

const Breadcrumb = ({ steps }: BreadcrumbProps) => {
  return (
    <nav aria-label='Breadcrumb' className='mb-2'>
      <ol className='breadcrumb'>
        <li>
          <Link href='/'>Accueil</Link>
        </li>

        {steps.map((step, index) => {
          const isLast = index === steps.length - 1

          return (
            <li key={index} className='breadcrumb-item'>
              <span className='separator-dot mx-1'>•</span>
              {isLast || !step.href ? (
                <span className='current'>{step.label}</span>
              ) : (
                <Link href={step.href}>{step.label}</Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
