import js from '@eslint/js';
import eslintPluginPlaywright from 'eslint-plugin-playwright';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended,
  eslintPluginPlaywright.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {},
  },
]);
