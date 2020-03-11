const {
  addLessLoader,
  addWebpackAlias,
  override,
  fixBabelImports
} = require("customize-cra");
const { theme } = require("./src/init/theme");
const aliases = require("./src/init/aliases");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme
  }),
  addWebpackAlias(aliases)
);
