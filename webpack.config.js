const path = require("path");
const glob = require("glob");

module.exports = {
    entry: glob.sync('./src/**/*.ts').reduce(function(obj, el){
        obj[path.parse(el).name] = el;
        return obj
    },{}),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname,"dist"),
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
          },
        ],
    }
}