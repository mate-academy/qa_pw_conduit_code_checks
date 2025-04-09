import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import playwright from 'eslint-plugin-playwright';

export default defineConfig([
  {
    rules: {
      'eol-last': ['error', 'always'],
    },
  },
  { 
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      'no-unused-vars': 'error',
      'max-len': [
        'error', {
          code: 80,
          comments: 80,
        },
      ],
    },
  },
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    languageOptions: { globals: globals.node }, 
    //set above to node to avoid errors with process.env
  },
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      'playwright/expect-expect': 'off',
    },
  },
]);
