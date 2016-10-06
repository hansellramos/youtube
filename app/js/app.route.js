angular.module('app')
  .config(
    ['$stateProvider', '$urlRouterProvider', 'APP',
    function ($stateProvider, $urlRouterProvider, APP) {
      $urlRouterProvider
        .otherwise(
          '/access/signin'
        );
        $stateProvider
          .state('app', {
            abstract: true,
            url: '/app',
            views: {
              '': {
                templateUrl: 'views/templates/'+APP.CONFIG.TEMPLATE.CURRENT+'/layout/content.html'
              }
            }
          });
    }])
;