import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // ==========================
      // Error & Warning Umum
      // ==========================

      // Variabel tidak terpakai → warning (kuning di editor)
      "no-unused-vars": [
        "warn",
        { vars: "all", args: "after-used", ignoreRestSiblings: true },
      ],

      "typescript-eslint/no-unused-vars": "warn",

      // Console log → warning (kuning)
      "no-console": "warn",

      // Harus pakai strict equality → error (merah)
      eqeqeq: ["error", "always"],

      // Tidak boleh pakai var → error (merah)
      "no-var": "error",

      // Indentasi 2 spasi → warning
      indent: ["warn", 2, { SwitchCase: 1 }],

      // React-specific
      "react-hooks/rules-of-hooks": "error", // Hooks harus di root function
      "react-hooks/exhaustive-deps": "warn", // deps harus lengkap
    },
  },
]);
