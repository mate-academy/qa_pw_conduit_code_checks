import pluginJs from "@eslint/js";
import playwright from "eslint-plugin-playwright";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  eslintConfigPrettier,

  pluginJs.configs.recommended,
  playwright.configs["flat/recommended"],
  {
    rules: {
      "no-unused-vars": "error",
      "max-len": [
        "error",
        {
          code: 85,
          comments: 85,
          ignoreTemplateLiterals: true,
        },
      ],
      "playwright/expect-expect": "off",
    },
    ignores: [
      "**/node_modules/*",
      "playwright.config.js",
      "**/playwright-report/**",
    ],
  },
]);
