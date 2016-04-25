import angular from 'angular'
import 'angular-ui-router'

angular.module('app', ['ui.router'])
  .config(($stateProvider, $urlRouterProvider, $locationProvider) =>{
    
    $stateProvider
      .state('/', {
        url: '/',
        template: require('./home.html'),
        controller: ($scope) =>{
          
          $scope.message = 'Welcome'
          
        }
      });

    $urlRouterProvider.otherwise('/');
  });