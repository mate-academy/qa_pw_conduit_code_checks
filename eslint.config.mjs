import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';


/** @type {import('eslint').Linter.Config[]} */
export default [
 { languageOptions: { globals: globals.node } },
 eslintConfigPrettier,
 {
   rules: {
     'no-unused-vars': 'error',
     'max-len': [
       'error',
       {
         code: 80,
         comments: 80,
       },
     ],
     'playwright/expect-expect': 'off',
   },
   ignores: [
     '**/node_modules/*',
     'playwright.config.js',
     '**/playwright-report/**',
   ],
 },
];