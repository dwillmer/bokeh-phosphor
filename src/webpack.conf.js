module.exports = {
  entry: './src/index.ts',
  output: {
    filename: './lib/bundle.js',
    libraryTarget: "var",
    library: "bokeh_phosphor"
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  }
}
