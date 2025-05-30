import { render, screen } from '@testing-library/react'
import { LanguageProvider } from '@/lib/language'
import Links from '@/app/links/page'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }
  },
}))

const renderWithLanguageProvider = (component: React.ReactElement) => {
  return render(
    <LanguageProvider>
      {component}
    </LanguageProvider>
  )
}

describe('Links Page', () => {
  it('renders the links title', () => {
    renderWithLanguageProvider(<Links />)
    
    expect(screen.getByText('外部リンク')).toBeInTheDocument()
  })

  it('renders GitHub link', () => {
    renderWithLanguageProvider(<Links />)
    
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('https://github.com/lethe2211')).toBeInTheDocument()
  })

  it('renders LinkedIn link', () => {
    renderWithLanguageProvider(<Links />)
    
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByText('https://www.linkedin.com/in/shuhei-shogen-833397a3/')).toBeInTheDocument()
  })

  it('renders Qiita link', () => {
    renderWithLanguageProvider(<Links />)
    
    expect(screen.getByText('Qiita')).toBeInTheDocument()
    expect(screen.getByText('https://qiita.com/lethe2211')).toBeInTheDocument()
  })

  it('renders Hatena Blog link', () => {
    renderWithLanguageProvider(<Links />)
    
    expect(screen.getByText('はてなブログ')).toBeInTheDocument()
    expect(screen.getByText('https://lethe2211.hatenablog.com/')).toBeInTheDocument()
  })

  it('renders all external links with correct attributes', () => {
    renderWithLanguageProvider(<Links />)
    
    const externalLinks = screen.getAllByRole('link')
    
    externalLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})