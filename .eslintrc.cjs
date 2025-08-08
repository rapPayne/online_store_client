module.exports = {
  root: true,
  env: { browser: true, es2020: true, "vitest/globals": true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:vitest/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'vitest'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ['setup.ts', '**/*.test.{ts,js,tsx,jsx}'],
      env: {
        'vitest/globals': true,
      },
    },
  ],
}
