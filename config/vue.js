module.exports = {
  extends: [
    require.resolve("./base"),
    "plugin:vue/essential",
    "@vue/typescript",
  ],
  rules: {
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "state", // for vuex state
          "acc", // for reduce accumulators
          "e", // for e.returnvalue
        ],
      },
    ],
  },
};
