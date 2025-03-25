import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      sourceType: "module", // Explicitly set sourceType to "module"
      globals: {
        ...globals.node, // Include Node.js globals
        ...globals.jest, // Include Jest globals (e.g., test, expect)
      },
    },
    plugins: {
      js,
      jest: jestPlugin, // Add Jest plugin
    },
    rules: {
      ...js.configs.recommended.rules, // Use recommended rules from @eslint/js
      ...jestPlugin.configs.recommended.rules, // Use recommended rules from eslint-plugin-jest
    },
  },
]);
