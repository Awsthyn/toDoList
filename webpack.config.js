const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "./main.js"
  },
  entry: {
  	main: "./src/index.js"
  }
}