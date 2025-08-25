import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import playwright from "eslint-plugin-playwright";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
      playwright,
    },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "error",
      "max-len": [
        "error",
        {
          code: 80,
          comments: 80,
        },
      ],
    },
  },
  {
    files: ["tests/**/*.@(spec|test).[jt]s?(x)"],
    rules: {
      ...playwright.configs["flat/recommended"].rules,
      "playwright/expect-expect": "off",
    },
  },
]);
