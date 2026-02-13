import globals from "globals";
import pluginJs from "@eslint/js";
import playwright from "eslint-plugin-playwright";

/** @type {import('eslint').Linter.Config[]} */
export default [
    pluginJs.configs.recommended,
    playwright.configs["flat/recommended"],
    {
        languageOptions: {
            globals: globals.node,
        },
        rules: {
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
    },
];
