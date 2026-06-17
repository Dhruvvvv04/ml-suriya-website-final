import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: [".next", "dist", "node_modules"] },
  {
    extends: [...tseslint.configs.recommended],
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "^[A-Z_]" }],
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
);
