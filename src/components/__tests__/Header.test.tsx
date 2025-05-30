import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageProvider } from '@/lib/language'
import Header from '@/components/Header'

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

const renderWithLanguageProvider = (component: React.ReactElement) => {
  return render(
    <LanguageProvider>
      {component}
    </LanguageProvider>
  )
}

describe('Header Component', () => {
  it('renders the logo', () => {
    renderWithLanguageProvider(<Header />)
    
    expect(screen.getByText('lethe2211')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    renderWithLanguageProvider(<Header />)
    
    expect(screen.getByText('ホーム')).toBeInTheDocument()
    expect(screen.getByText('ポートフォリオ')).toBeInTheDocument()
    expect(screen.getByText('リンク')).toBeInTheDocument()
  })

  it('renders language selector', () => {
    renderWithLanguageProvider(<Header />)
    
    const languageSelect = screen.getByRole('combobox')
    expect(languageSelect).toBeInTheDocument()
    expect(screen.getByDisplayValue('日本語')).toBeInTheDocument()
  })

  it('changes language when selector is used', () => {
    renderWithLanguageProvider(<Header />)
    
    const languageSelect = screen.getByRole('combobox')
    fireEvent.change(languageSelect, { target: { value: 'en' } })
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Links')).toBeInTheDocument()
  })

  it('has correct navigation links', () => {
    renderWithLanguageProvider(<Header />)
    
    const homeLink = screen.getByText('ホーム').closest('a')
    const portfolioLink = screen.getByText('ポートフォリオ').closest('a')
    const linksLink = screen.getByText('リンク').closest('a')
    
    expect(homeLink).toHaveAttribute('href', '/')
    expect(portfolioLink).toHaveAttribute('href', '/portfolio')
    expect(linksLink).toHaveAttribute('href', '/links')
  })
})