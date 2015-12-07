(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $mdThemingProvider) {
    // Enable log
    var neonRedMap = $mdThemingProvider.extendPalette('grey', {
    'white': 'ffffff'
    });

    $mdThemingProvider.definePalette('grey', neonRedMap);

    $logProvider.debugEnabled(true);
    $mdThemingProvider.theme('default')
    .primaryPalette('grey', {
      'default': '400', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '50', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })



    .backgroundPalette('grey', {
      'default': '100' // use shade 200 for default, and keep all other shades the same
    })
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    .accentPalette('grey', {
      'default': '200' // use shade 200 for default, and keep all other shades the same
    });
    
  }

})();
