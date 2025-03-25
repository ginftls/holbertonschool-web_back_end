export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      indent: ['error', 2], // Enforce 2-space indentation
      quotes: ['error', 'single'], // Enforce single quotes
      semi: ['error', 'always'], // Require semicolons at the end of statements
      'no-unused-vars': 'warn', // Warn about unused variables
    },
  },
];
