import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { App } from './App'

// Mock react-router
vi.mock('react-router', () => ({
  useParams: () => ({ id: '456' }),
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <div data-testid="router">{children}</div>,
  Routes: ({ children }: { children: React.ReactNode }) => <div data-testid="routes">{children}</div>,
  Route: ({ element }: { element: React.ReactNode }) => <div data-testid="route">{element}</div>,
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to} data-testid="link">{children}</a>
  ),
}))


const mockFetch = vi.fn()
global.fetch = mockFetch

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders header navigation', () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => []
    })

    render(<App />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Checkout' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Contact us' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Login' }).length).toBeGreaterThan(0)
  })

  it('renders footer', () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => []
    })

    render(<App />)

    const currentYear = new Date().getFullYear()
    expect(screen.getByText(`Copyright © us.com ${currentYear}, all rights reserved`)).toBeInTheDocument()
  })

  it('fetches products successfully', async () => {
    const mockProducts = [
      { id: 1, name: 'Test Product', price: 10, category: 'Test', on_hand: 5 }
    ]

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts
    })

    render(<App />)

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/products')
    })
  })

  it('handles fetch error gracefully', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'))

    render(<App />)

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/products')
    })
  })

  it('handles non-ok response', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500
    })

    render(<App />)

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/products')
    })
  })

  it('handles JSON parsing error', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => { throw new Error('Invalid JSON') }
    })

    render(<App />)

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/products')
    })
  })
})