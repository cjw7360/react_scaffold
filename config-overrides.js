const {
    override,
    fixBabelImports,
    addWebpackAlias,
    addPostcssPlugins
} = require("customize-cra");
const path = require("path");

const postcss = require("./postcss.config.js");
// postcss 配置项
const postcssPlugin = Object.keys(postcss).map(key => require(key)(postcss[key]));


module.exports = override(

    // add an alias for @ dir
    addWebpackAlias({
        ["@"]: path.join(__dirname, 'src')
    }),
    //babel-plugin-import : 用于按需加载组件代码和样式的 babel 插件
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addPostcssPlugins(postcssPlugin)
);