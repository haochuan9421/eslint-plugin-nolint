module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  globals: {
    Atomics: false,
    SharedArrayBuffer: false,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
};
