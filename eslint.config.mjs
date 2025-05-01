import globals from 'globals';
import pluginJs from '@eslint/js';
import playwright from 'eslint-plugin-playwright';

/** @type {import('eslint').Linter.Config} */
export default {
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.browser,
    },
  },
  plugins: {
    playwright,
  },
  rules: {
    ...pluginJs.configs.recommended.rules,
    ...playwright.configs['flat/recommended'].rules,
    'no-unused-vars': 'error',
    'max-len': ['error', { code: 80, comments: 80 }],
    'playwright/expect-expect': 'off',
  },
};
