// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import playwright from "eslint-plugin-playwright";
import prettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },

    // 👇 Явно вказуємо плагіни
    plugins: { playwright },

    // 👇 Розширюємо стандартну JS-конфігурацію та Prettier
    extends: [js.configs.recommended, prettier],

    // 👇 Витягуємо рекомендовані правила Playwright вручну
    rules: {
      ...playwright.configs["flat/recommended"].rules,

      // Твої додаткові правила
      "no-unused-vars": "error",
      "max-len": [
        "error",
        {
          code: 80,
          comments: 80,
        },
      ],
      "playwright/expect-expect": "off",
    },

    ignores: [
      "**/node_modules/**",
      "playwright.config.js",
      "**/playwright-report/**",
    ],
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "module" },
  },
]);
