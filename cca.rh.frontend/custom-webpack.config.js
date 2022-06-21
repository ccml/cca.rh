var MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");
 
module.exports = {
  plugins: [
    new MergeJsonWebpackPlugin({
        output: {
          groupBy: [
              { pattern: "./src/app/**/i18n/fr/**/*.json", fileName: "./assets/i18n/fr.json" }
          ]
      }
    })
  ]
};