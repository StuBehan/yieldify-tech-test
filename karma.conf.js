// Karma configuration
// Generated on Wed Jul 21 2021 15:08:41 GMT+0100 (British Summer Time)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'spec/*Spec.js',
      'src/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'src/**/*.js': ['coverage']
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
