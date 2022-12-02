module.exports = {
  ignorePatterns: ['**/.next/**', '**/.layer0/**'],
  extends: ['next/core-web-vitals', 'standard', 'prettier', 'plugin:jsx-a11y/strict'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-max-props-per-line': ['error', { maximum: 4, when: 'always' }],
    'react-hooks/exhaustive-deps': 'error',
  },
}
