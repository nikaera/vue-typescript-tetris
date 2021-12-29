module.exports = {
  root: true,
  env: {
      browser: true,
      es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended"
  ],
  parserOptions: {
      ecmaVersion: 2021
  },
  plugins: [
  ],
  rules: {
    "no-redeclare": "off"
  }
};
