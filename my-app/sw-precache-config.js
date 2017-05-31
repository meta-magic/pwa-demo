module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'dist',
  root: 'dist/',
  staticFileGlobs: [
    'dist/index.html',
    'dist/assets/**.jpeg',
    'dist/**.js',
    'dist/**.css'
  ],

runtimeCaching: [{
  urlPattern: /\/api\//,
  handler: 'networkFirst',
  options: {
    cache: {
      maxEntries: 10,
      name: 'articles-cache'
    }
  }
}]


};
