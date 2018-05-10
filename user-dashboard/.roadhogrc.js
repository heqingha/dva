module.exports = {
  entry: "src/index.js",
  proxy: {
    "/api": {
      target: "http://jsonplaceholder.typicode.com/",
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    }
  },
  env: {
    development: {
      extraBabelPlugins: [
        "dva-hmr",
        "transform-runtime",
        ["import", { libraryName: "antd", style: true }]
      ]
    },
    production: {
      extraBabelPlugins: [
        "transform-runtime",
        ["import", { libraryName: "antd", style: true }]
      ]
    }
  }
};
