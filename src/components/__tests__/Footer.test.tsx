import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer Component', () => {
  it('renders the footer content', () => {
    render(<Footer />)
    
    expect(screen.getByText('© 2025 lethe2211. All rights reserved.')).toBeInTheDocument()
  })

  it('has correct styling classes', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    
    expect(footer).toHaveClass('bg-gray-900', 'text-white', 'mt-auto')
  })
})