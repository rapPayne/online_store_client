import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Home } from './Home'
import { mockProducts } from './test/mocks/products'

// Mock ProductList component
vi.mock('./ProductList', () => ({
  ProductList: ({ products, title }: { products: any[], title: string }) => (
    <div data-testid="product-list">
      <h1>{title}</h1>
      <div>Products: {products.length}</div>
    </div>
  )
}))

describe('Home', () => {
  it('renders search input and button', () => {
    render(<Home products={mockProducts} />)
    
    expect(screen.getByPlaceholderText('🔍')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('renders ProductList with correct props', () => {
    render(<Home products={mockProducts} />)
    
    expect(screen.getByTestId('product-list')).toBeInTheDocument()
    expect(screen.getByText('Stuff to buy')).toBeInTheDocument()
    expect(screen.getByText(`Products: ${mockProducts.length}`)).toBeInTheDocument()
  })

  it('renders with empty products array', () => {
    render(<Home products={[]} />)
    
    expect(screen.getByTestId('product-list')).toBeInTheDocument()
    expect(screen.getByText('Products: 0')).toBeInTheDocument()
  })
})