

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























// export default [
//   {
//     files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
//     languageOptions: { globals: globals.browser },
//   },
//   pluginJs.configs.recommended,
//   playwright.configs['flat/recommended'],
//   eslintConfigPrettier,
//   {
//     rules: {
//       'no-unused-vars': 'error',
//       'max-len': ['error', { code: 80, comments: 80 }],
//       'playwright/expect-expect': 'off',
//     },
//     ignores: ['**/node_modules/*', 'playwright.config.js', 
//       '**/playwright-report/**'],
//   },
// ];






// import globals from 'globals';
// import pluginJs from '@eslint/js';
// import playwright from 'eslint-plugin-playwright';
// import eslintConfigPrettier from 'eslint-config-prettier';

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   { languageOptions: { globals: globals.node } },
//   {
//     ...pluginJs.configs.recommended,
//     rules: {
//       ...pluginJs.configs.recommended.rules,
//       'no-unused-vars': 'error',
//       'max-len': [
//         'error',
//         {
//           code: 80,
//           comments: 80,
//         },
//       ],
//       plugins: { playwright },
//       ...pluginJs.configs.recommended,
//       ...playwright.configs['flat/recommended'].rules,
//       'playwright/expect-expect': 'off',
//     },
//     ignores: [
//       '**/node_modules/*',
//       'playwright.config.js',
//       '**/playwright-report/**',
//     ],
//   },
// ];
