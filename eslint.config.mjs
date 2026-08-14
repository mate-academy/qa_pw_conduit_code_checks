import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["playwright-report/", "test-results/", "blob-report/"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  },
];