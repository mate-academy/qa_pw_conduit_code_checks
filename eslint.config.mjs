import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import playwright from "eslint-plugin-playwright";
import prettier from "eslint-config-prettier";

export default defineConfig([
  js.configs.recommended,
  playwright.configs["flat/recommended"],
  prettier,
  {
    files: ["eslint.config.mjs", "playwright.config.js", "**/*.config.{js,mjs,cjs}"],
    languageOptions: {
      sourceType: "module",
      globals: globals.node,
    },
  },
  {
    files: ["src/**/*.js", "tests/**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      "no-unused-vars": "error",
      "max-len": ["error", { code: 80, comments: 80 }],
      "playwright/expect-expect": "off",
    },
  },
  {
    ignores: [
      "**/node_modules/**",
      "**/playwright-report/**",
    ],
  },
]);