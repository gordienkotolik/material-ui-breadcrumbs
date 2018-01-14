const envConf = require('dotenv').config;
envConf();

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


let production = process.env.NODE_ENV === 'production' || process.argv.indexOf('-p') !== -1;

const cssLoader = {
  loader: "css-loader",
  query: {
    camelCase: true,
    modules: true,
    localIdentName: !production ? '[path]___[name]__[local]___[hash:base64:5]' : '[hash:base64:5]',
    sourceMap: !production,
    minimize: production,
    discardComments: {removeAll: true},
  },
};
const sassLoader = {
  loader: "sass-loader",
  query: {
    includePaths: [
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "src"),
    ]
  }
};
const entry = {
  index: `./src/web/index.tsx`,
};

module.exports = {
  target: 'web',
  context: __dirname,
  entry,

  node: {
    __dirname: true,
  },

  output: {
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    path: path.resolve(__dirname, "lib"), // string

    // the filename template for entry chunks
    filename: "[name].js", // string

    chunkFilename: '[name][id][chunkhash].js',

    // the url to the output directory resolved relative to the HTML page
    publicPath: "/", // string
  },
  plugins: [
    new CleanWebpackPlugin(['build/web'], {
      root: path.resolve(__dirname),
      verbose: true,
      dry: false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: production,
      debug: !production,
      options: {
        context: __dirname,
      },
    }),
    new webpack.DefinePlugin({
      __WEB__: true,
      __SERVER__: false,
      "global.GENTLY": false,
    }),
    ...(
      production ? [
        new UglifyJSPlugin({
          parallel: true,
          uglifyOptions: {
            ie8: false,
            ecma: 8,
            mangle: true,
            sourceMap: true,
            compress: {
              warnings: false, // Suppress uglification warnings
              drop_console: true,
            },
            output: {
              comments: false,
              beautify: false,
            },
          },
        }),
      ] : []
    ),
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules",
    ],
    extensions: [
      '.webpack.js', '.web.js',
      '.ts', '.tsx',
      '.js', '.jsx',
      '.html',
      '.json',
      '.node',
      '.css', '.less', '.sass', '.scss',
      '.woff', '.woff2', '.ttf', '.eot',
      '.svg', '.md',
      '.jpg', '.png',
    ],
    alias: {},
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          cssLoader,
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          cssLoader,
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'postcss-loader',
          },
          "less-loader",
        ],
      },
      {
        test: /\.sass$/,
        use: [
          cssLoader,
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'postcss-loader',
          },
          sassLoader,
        ],
      },
      {
        test: /\.scss$/,
        use: [
          cssLoader,
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'postcss-loader',
          },
          sassLoader,
        ],
      },
      {test: /\.node$/, loader: 'node-loader',},
      {test: /\.json$/, loader: 'json-loader'}, // already set by default in webpack@2.2, so redundant
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /\.gif(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
      {test: /\.md$/, loader: "html-loader!markdown-loader?gfm=false",},
      {test: /LICENSE$/, loader: "html-loader!markdown-loader?gfm=false",},
      {test: /\.jpg|png$/, loader: "url-loader?limit=100000"},
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          {loader: 'ts-loader', options: {transpileOnly: false}},
          {loader: 'tslint-loader'},
        ],
      },
      {
        test: /\.html$/,
        use: [
          "htmllint-loader",
          {loader: "html-loader",}
        ]
      },
    ],
  },

  stats: {
    children: false, // Log spam
    reasons: !production,
    hash: true,
    version: true,
    timings: true,
    chunks: false,
    chunkModules: false,
    cached: true,
  },

  cache: true,

  performance: {
    hints: 'warning'
  },
};
