const path = require("path");
module.exports = {
    entry: './script/app.js',

    output: {
        path: path.join(__dirname, "./script"),
        filename: "bundle.js"
    }
}