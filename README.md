# react_scaffold

## 1. Technology stack

* Request data : `axios` .
* Router : `react-router-dom` .
* CSS Load on demand : `babel-plugin-import` .
* UI Component library : `Ant Design` .
* Mobile client VM-Layout : `postCss` .
---
## 2. CRA overrides
Use `react-app-rewired` and `customize-cra` .
* Set alias : @ -> /root/..../src (Absolute path) .
* Add css load on demand feature .
* Add vm-layout postCss

Content of config-overrides.js :
```
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
```

## 3. Run
Just run `npm start` .
