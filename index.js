const reactConfig = require("./config/react");
const vueConfig = require("./config/vue");
const wxappConfig = require("./config/wxapp");

module.exports = {
  environments: {
    wxapp: {
      globals: {
        wx: true,
        App: true,
        Page: true,
        Component: true,
        Behavior: true,
        getApp: true,
        getCurrentPages: true,
      },
    },
  },
  rules: {},
  configs: {
    react: reactConfig,
    vue: vueConfig,
    wxapp: wxappConfig,
  },
};
