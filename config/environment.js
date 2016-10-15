/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'chef-tracker',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
       apiKey: "AIzaSyBR-IA-WQZ9LsFaAeZqvC25W9T2TFsOIZI",
       authDomain: "chef-tracker-b5317.firebaseapp.com",
       databaseURL: "https://chef-tracker-b5317.firebaseio.com",
       storageBucket: "chef-tracker-b5317.appspot.com",
       messagingSenderId: "711181645186"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.rootURL = '/chef-tracker/';

  }

  return ENV;
};
