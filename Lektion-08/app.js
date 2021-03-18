const myApp = angular.module("myApp", ['ngSanitize']);

myApp.controller("myCtrl", function ($scope) {
  $scope.firstName = "Mahmud";
  $scope.lastName = "Al Hakim";
});

myApp.controller("personCtrl", function ($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
  $scope.fullName = function () {
    return $scope.firstName + " " + $scope.lastName;
  };
});

myApp.controller("addressCtrl", function ($scope) {
  $scope.streetAddress = "Gata 1";
  $scope.postalCode = "12345";
  $scope.city = "Solna";
  $scope.fullAddress = function () {
    return (
      // problem med <br>
      $scope.streetAddress + "<br>" + $scope.postalCode + " " + $scope.city
    );
  };
});

myApp.controller("namesCtrl", function ($scope) {
  $scope.names = [
    { name: "Jani", country: "Norway" },
    { name: "Jane", country: "Norway" },
    { name: "Mahmud", country: "Sweden" },
    { name: "Johan", country: "Sweden" },
    { name: "Linn", country: "Sweden" },
    { name: "Kai", country: "Denmark" },
    { name: "Erik", country: "Denmark" },
  ];
});

// rootScope
myApp.run(function($rootScope) {
    $rootScope.color = 'Orange';
});

myApp.controller("usersCtrl" , function ($scope, $http){
    $http.get("https://jsonplaceholder.typicode.com/users")
    .then(response => $scope.users = response.data)
});

myApp.controller("foxCtrl" , function ($scope, $http){
    $http.get("https://randomfox.ca/floof/")
    .then(response => $scope.foxImage = response.data.image)
});

myApp.controller("memeCtrl" , function ($scope, $http){
    $http.get("https://api.imgflip.com/get_memes")
    .then(response => $scope.memes = response.data.data.memes)
});

myApp.controller("shopCtrl" , function ($scope, $http){
    $http.get("https://webacademy.se/fakestore/")
    .then(response => $scope.products = response.data)
});