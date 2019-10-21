
module.exports = {
  pages: {
    page1 : {
      entry : 'src/page1/main.js',
      template : 'public/page1.html',
      filename: 'page1.html',
    },
    page2 : {
      entry : 'src/page2/main.js',
      template : 'public/page2.html',
      filename: 'page2.html',
    }
  },
  productionSourceMap: false,
  devServer: {
    historyApiFallback : {
      rewrites: [
        {from : /\/page1/, to: '/page1.html'},
        {from : /\/page2/, to: '/page2.html'},
        {from : /./, to: '/page1.html'}
      ]
    }
  }
}
