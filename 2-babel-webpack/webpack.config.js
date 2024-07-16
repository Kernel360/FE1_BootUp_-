const path = require("path");

module.exports = {
    mode: "production",
    entry: "./scripts.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "foo.bundle.js",
        library: "lib",
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env"]],
                    },
                },
            },
        ],
    },
};
