module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parser: {
    sourceType: "module",
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
  files: {
    "*.js": "eslint",
    "*.jsx": "eslint",
  }
};
