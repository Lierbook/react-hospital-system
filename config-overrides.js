//override 重写cra脚手架默认的webpack配置
//fixBabelImports组件按需导入
const path = require("path");
const { override, fixBabelImports } = require("customize-cra");

module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd-mobile",
        style: "css",
    })
);