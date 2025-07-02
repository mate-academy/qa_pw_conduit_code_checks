import globals from 'globals';
import pluginJs from '@eslint/js';
import playwright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.node
    }
  },
  eslintConfigPrettier,
  // Spread ESLint and Playwright configs separately first
  ...pluginJs.configs.recommended,
  ...playwright.configs['flat/recommended'],
  {
    rules: {
      // ✅ Spread rule sets inside 'rules'
      ...playwright.configs['flat/recommended'].rules,
      ...pluginJs.configs.recommended.rules,

      // ✅ Overrides go here
      'no-unused-vars': 'error',
      'max-len': ['error', { code: 80, comments: 80 }],
      'playwright/expect-expect': 'off'
    }
  }
];