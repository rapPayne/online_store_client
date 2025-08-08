import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactUs, Login, Checkout, FourOhFourWinkWink, Product } from './Other'

// Mock useParams hook
const mockUseParams = vi.fn()
vi.mock('react-router', () => ({
  useParams: () => mockUseParams()
}))

describe('Other Components', () => {
  describe('Contact Us', () => {
    it('renders ContactUs heading', () => {
      render(<ContactUs />)
      expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    })
  })

  describe('Login', () => {
    it('renders Login heading', () => {
      render(<Login />)
      expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()
    })
  })

  describe('Checkout', () => {
    it('renders Checkout heading', () => {
      render(<Checkout />)
      expect(screen.getByRole('heading', { name: 'Check out' })).toBeInTheDocument()
    })
  })

  describe('FourOhFourWinkWink', () => {
    it('renders 404 error message', () => {
      render(<FourOhFourWinkWink />)

      expect(screen.getByRole('heading', { name: 'Oh noes! You broke us' })).toBeInTheDocument()
      expect(screen.getByText("Maybe you're looking for ...")).toBeInTheDocument()
    })

    it('renders navigation links', () => {
      render(<FourOhFourWinkWink />)

      expect(screen.getByRole('link', { name: 'List of products' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Contact us' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument()
    })

    it('has correct href attributes', () => {
      render(<FourOhFourWinkWink />)

      expect(screen.getByRole('link', { name: 'List of products' })).toHaveAttribute('href', '/')
      expect(screen.getByRole('link', { name: 'Contact us' })).toHaveAttribute('href', '/contact')
      expect(screen.getByRole('link', { name: 'Login' })).toHaveAttribute('href', '/login')
    })
  })

  describe('Product', () => {
    it('renders product details heading', () => {
      mockUseParams.mockReturnValue({ id: '123' })

      render(<Product />)

      expect(screen.getByRole('heading', { name: 'Product details' })).toBeInTheDocument()
    })

    it('displays product ID from params', () => {
      const testId = '456'
      mockUseParams.mockReturnValue({ id: testId })

      render(<Product />)

      expect(screen.getByText(`You're looking at the deets for product ${testId}`)).toBeInTheDocument()
    })

    it('handles undefined product ID', () => {
      mockUseParams.mockReturnValue({ id: undefined })

      render(<Product />)

      expect(screen.getByText("You're looking at the deets for product")).toBeInTheDocument()
    })
  })
})