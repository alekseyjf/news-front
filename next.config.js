const path = require("path");
const webpack = require("webpack");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
  [],
  {
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: "url-loader"
        }
      });

      config.module.rules.push({
        test: /\.txt$/,
        use: "raw-loader"
      });

      Object.assign(config.resolve.alias, {
        app: path.resolve(__dirname, "./src"),
        desktop: path.resolve(__dirname, "./src/desktop"),
        components: path.resolve(__dirname, "./src/components"),
        config: path.resolve(__dirname, "./src/config"),
        pages: path.resolve(__dirname, "./pages"),
        styles: path.resolve(__dirname, "./styles")
      });

      // config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));

      return config;
    }
  }
);
