import angular from 'angular'
import 'angular-ui-router'

angular.module('app', ['ui.router'])
  .config(
    ['$stateProvider', '$urlRouterProvider', '$locationProvider',
      ($stateProvider, $urlRouterProvider, $locationProvider) =>{

        require('./bootstrap.css');

        $stateProvider
          .state('/', {
            url: '/',
            template: require('./home.html'),
            controller: 
            ['$scope',
              ($scope) =>{

                $scope.message = 'Welcome'

              }
            ]
          });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
      }]
  );

