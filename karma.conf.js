// Karma configuration
// Generated on Thu Mar 10 2016 14:40:22 GMT+0000 (GMT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      

      'src/vendor/jquery/dist/jquery.js',
      'src/vendor/angular/angular.js',
      'src/vendor/angular-bootstrap/ui-bootstrap.js',
      'src/vendor/angular-mocks/angular-mocks.js',
      'src/vendor/angular-route/angular-route.js',
      'src/vendor/angular-toastr/dist/angular-toastr.js',
      'src/vendor/angular-translate/angular-translate.js',
      'src/vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'src/vendor/bootstrap/dist/js/bootstrap.js',
      'src/vendor/angular/angular.js',
      'src/vendor/lodash/dist/lodash.js',

      'src/app.js',
      'src/shared/app.js',

      'src/components/**/*.js',
      'src/components/**/*.spec.js'

    ],


    // list of files to exclude
    exclude: [
      
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        // Files to include in the code coverage report:
       'src/components/language/LanguageController.js': ['coverage'],
       'src/components/seller-details/SellerdetailsController.js': ['coverage'],
       'src/components/seller-dlg/SellerDlgController.js': ['coverage'],
       'src/components/seller-dlg/sellerDlg.js': ['coverage'],
       'src/components/sellers/SellersController.js': ['coverage']
    },

    coverageReporter: {
        type: 'html',
        dir: 'coverage/'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
