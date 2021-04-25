var todoApp = angular.module('todoApp',['ng-Resource','ngRoute']);

todoApp.config(function ($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'templates/main.html',
    controller: 'MainController'
  })
  .when('/login',{
    templateUrl: 'templates/login.html',
    controller: 'LoginController'
  })
});

todoApp.controller('MainController', ['$scope', function ($scope){

}])

todoApp.controller('LoginController', ['$scope', function ($scope){

}])
