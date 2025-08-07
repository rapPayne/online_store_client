import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductList } from './ProductList'
import { mockProducts } from './test/mocks/products'

// Mock RenderProduct component
vi.mock('./RenderProduct', () => ({
  RenderProduct: ({ product }: { product: any }) => (
    <div data-testid={`product-${product.id}`}>
      {product.name} - ${product.price}
    </div>
  )
}))

describe('ProductList', () => {
  it('renders title correctly', () => {
    const title = 'Test Products'
    render(<ProductList products={mockProducts} title={title} />)
    
    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
  })

  it('renders all products', () => {
    render(<ProductList products={mockProducts} title="Test Products" />)
    
    mockProducts.forEach(product => {
      expect(screen.getByTestId(`product-${product.id}`)).toBeInTheDocument()
      expect(screen.getByText(`${product.name} - $${product.price}`)).toBeInTheDocument()
    })
  })

  it('renders with empty products array', () => {
    render(<ProductList products={[]} title="No Products" />)
    
    expect(screen.getByRole('heading', { name: 'No Products' })).toBeInTheDocument()
    expect(screen.queryByTestId(/^product-/)).not.toBeInTheDocument()
  })

  it('applies correct CSS classes', () => {
    render(<ProductList products={mockProducts} title="Test Products" />)
    
    const container = screen.getByRole('heading', { name: 'Test Products' }).closest('.ProductList')
    expect(container).toBeInTheDocument()
    
    const productSection = container?.querySelector('.productList')
    expect(productSection).toBeInTheDocument()
  })
})