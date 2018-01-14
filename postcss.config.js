module.exports = {
  plugins: [
    require('postcss-smart-import')({ /* ...options */ }),
    require('precss')({ /* ...options */ }),
    require('postcss-flexbugs-fixes')({ /* ...options */ }),
    require('autoprefixer')({ /* ...options */ })
  ]
};
