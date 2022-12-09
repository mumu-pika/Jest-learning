module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    "jest/globals": true,
  },
  plugins: [],
  extends: [
    // ESLint
    "eslint:recommended",
    // TypeScript
    "plugin:@typescript-eslint/recommended",
    // Jest
    "plugin:jest/recommended",
    // React Testing Library
    "plugin:testing-library/react",
    // Prettier
    "plugin:prettier/recommended",
  ],
  rules: {
    // 关闭规则
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-var": "off",
    "@typescript-eslint/no-var-requires": "off",
    "testing-library/no-dom-import": "off",
    // 错误提示
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    // 告警提示
    "jest/no-disabled-tests": "warn",
    "jest/prefer-to-have-length": "warn",
    "testing-library/no-debugging-utils": "warn",
  },
};
