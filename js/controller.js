var app = angular.module("userProfiles").controller('MainController', function($scope, MainService) {
    $scope.users = MainService.getUsers();
});