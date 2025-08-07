import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RenderProduct } from './RenderProduct'
import { mockProducts } from './test/mocks/products'

// Mock react-router Link
vi.mock('react-router', () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to} data-testid="product-link">{children}</a>
  )
}))

describe('RenderProduct', () => {
  const productWithImage = mockProducts[0]
  const productWithoutImage = mockProducts[2]

  it('renders product with image', () => {
    render(<RenderProduct product={productWithImage} />)
    
    const image = screen.getByAltText(productWithImage.name)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', productWithImage.imageUrl)
  })

  it('renders product without image with fallback', () => {
    render(<RenderProduct product={productWithoutImage} />)
    
    const image = screen.getByAltText(productWithoutImage.name)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/assets/images/image_not_available.png')
  })

  it('renders product name', () => {
    render(<RenderProduct product={productWithImage} />)
    
    expect(screen.getByText(productWithImage.name)).toBeInTheDocument()
  })

  it('renders product price', () => {
    render(<RenderProduct product={productWithImage} />)
    
    expect(screen.getByText(productWithImage.price.toString())).toBeInTheDocument()
  })

  it('renders product description when provided', () => {
    render(<RenderProduct product={productWithImage} />)
    
    expect(screen.getByText(productWithImage.description!)).toBeInTheDocument()
  })

  it('renders product on_hand quantity', () => {
    render(<RenderProduct product={productWithImage} />)
    
    expect(screen.getByText(`On hand: ${productWithImage.on_hand}`)).toBeInTheDocument()
  })

  it('renders product category as button', () => {
    render(<RenderProduct product={productWithImage} />)
    
    const categoryButton = screen.getByRole('button', { name: productWithImage.category })
    expect(categoryButton).toBeInTheDocument()
    expect(categoryButton).toHaveClass('tag')
  })

  it('creates correct link to product detail page', () => {
    render(<RenderProduct product={productWithImage} />)
    
    const link = screen.getByTestId('product-link')
    expect(link).toHaveAttribute('href', `/product/${productWithImage.id}`)
  })

  it('applies correct CSS classes', () => {
    const { container } = render(<RenderProduct product={productWithImage} />)
    
    expect(container.firstChild).toHaveClass('RenderProduct')
  })

  it('handles product without description', () => {
    const productNoDesc = { ...productWithImage, description: undefined }
    render(<RenderProduct product={productNoDesc} />)
    
    expect(screen.getByText(productNoDesc.name)).toBeInTheDocument()
    expect(screen.queryByText(productWithImage.description!)).not.toBeInTheDocument()
  })
})