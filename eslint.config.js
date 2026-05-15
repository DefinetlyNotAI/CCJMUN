import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"

export default [
  {
    ignores: ["dist", "node_modules", "build", ".next", "out"]
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  pluginReact.configs.flat.recommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off"
    }
  }
]