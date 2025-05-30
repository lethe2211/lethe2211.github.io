import { render, screen } from '@testing-library/react'
import { LanguageProvider } from '@/lib/language'
import Home from '@/app/page'

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

describe('Home Page', () => {
  it('renders the main heading', () => {
    renderWithLanguageProvider(<Home />)
    
    expect(screen.getByText('lethe2211')).toBeInTheDocument()
  })

  it('renders career summary section', () => {
    renderWithLanguageProvider(<Home />)
    
    expect(screen.getByText('キャリアサマリ')).toBeInTheDocument()
  })

  it('renders skills section', () => {
    renderWithLanguageProvider(<Home />)
    
    expect(screen.getByText('スキル')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
  })

  it('renders updated programming languages including Kotlin', () => {
    renderWithLanguageProvider(<Home />)
    
    expect(screen.getByText('Kotlin')).toBeInTheDocument()
    expect(screen.getByText('Java')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
  })

  it('renders updated certifications', () => {
    renderWithLanguageProvider(<Home />)
    
    expect(screen.getByText('情報処理安全確保支援士')).toBeInTheDocument()
    expect(screen.getByText('CKS')).toBeInTheDocument()
    expect(screen.getByText('TOEIC 900')).toBeInTheDocument()
  })
})