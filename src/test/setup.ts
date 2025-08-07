import '@testing-library/jest-dom'

// Mock fetch globally
global.fetch = vi.fn()

// Mock console methods to avoid noise in tests
global.console = {
  ...console,
  log: vi.fn(),
  error: vi.fn(),
  warn: vi.fn(),
}