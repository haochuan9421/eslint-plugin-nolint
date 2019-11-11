module.exports = {
  env: {
    "nolint/wxapp": true,
  },
  extends: [require.resolve("./base")],
  plugins: ["nolint"],
  overrides: [
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
    },
  ],
};
