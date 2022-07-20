const path = require("path");

module.exports = {
    watch: true,
    mode: "production",
    entry: "./SRC/JS/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./DIST",
       
    },
    experiments: {
        topLevelAwait: true
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        }, ],
    },
}