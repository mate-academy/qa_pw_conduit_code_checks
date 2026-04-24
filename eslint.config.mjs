

import globals from 'globals';
import pluginJs from '@eslint/js';
import playwright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { languageOptions: { globals: globals.node } },
  {
    files: ['**/*.js', '**/*.ts'],
    ...pluginJs.configs.recommended,
    ...playwright.configs['flat/recommended'],
    rules: {
      'no-unused-vars': 'error',
      'max-len': ['error', { code: 80, comments: 80 }],
      'playwright/expect-expect': 'off',
    },
  },
  eslintConfigPrettier,
];






















