import js from "@eslint/js";
import globals from "globals";
import playwright from "eslint-plugin-playwright";
import eslintConfigPrettier from "eslint-config-prettier"; // 1. Імпортуємо

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      "**/node_modules/",
      "playwright.config.js",
      "**/playwright-report/",
      "**/test-results/",
    ],
  },

  js.configs.recommended,
  playwright.configs['flat/recommended'],

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "error",
      // Зверніть увагу: правила форматування (як max-len) 
      // тепер краще довірити Prettier, але ми можемо їх залишити тут.
      "max-len": ["error", { code: 80 }], 
      "playwright/expect-expect": "off",
    },
  },

  eslintConfigPrettier, // 2. Додаємо в кінець масиву
];