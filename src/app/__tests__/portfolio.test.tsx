import { render, screen } from '@testing-library/react'
import { LanguageProvider } from '@/lib/language'
import Portfolio from '@/app/portfolio/page'

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

describe('Portfolio Page', () => {
  it('renders the portfolio title', () => {
    renderWithLanguageProvider(<Portfolio />)
    
    expect(screen.getByText('ポートフォリオ')).toBeInTheDocument()
  })

  it('renders Pokemon SV Damage Calculator project', () => {
    renderWithLanguageProvider(<Portfolio />)
    
    expect(screen.getByText('ポケモンSVダメージ計算ツール')).toBeInTheDocument()
    // Use getAllByText as there are multiple "開発中" statuses
    const developmentStatus = screen.getAllByText('開発中')
    expect(developmentStatus.length).toBeGreaterThan(0)
  })

  it('renders Pokedex App project', () => {
    renderWithLanguageProvider(<Portfolio />)
    
    expect(screen.getByText('ポケモン図鑑アプリ')).toBeInTheDocument()
    expect(screen.getByText('完成')).toBeInTheDocument()
  })

  it('renders Mei Rou project', () => {
    renderWithLanguageProvider(<Portfolio />)
    
    expect(screen.getByText('迷廊')).toBeInTheDocument()
  })

  it('renders external links for projects', () => {
    renderWithLanguageProvider(<Portfolio />)
    
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })
})