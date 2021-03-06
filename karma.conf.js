/*jslint indent: 2 */
// Karma configuration
// Generated on Thu Mar 05 2015 18:16:49 GMT+0000 (UTC)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'public/scripts/jquery/dist/jquery.min.js',
      'public/scripts/d3/d3.min.js',
      'public/scripts/c3/c3.min.js',
      'public/vendor/jquery-auto-complete/jquery.auto-complete.min.js',
      'public/scripts/angular/angular.js',
      'public/scripts/angular-route/angular-route.js',
      'public/scripts/angular-mocks/angular-mocks.js',
      'test/app-test-init.js',
      'public/app/**/*.js',
      'public/app/partials/**/*.html',
      'test/app/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      'public/app/app.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'public',
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
