var app = angular.module("myapp",[]);

app.controller("askCtrl", function($scope){
    //$scope.name = "Daniele";
    
    $scope.show = function() {
        if ($scope.name) {
            alert("Hi, " + $scope.name);
        } else alert("WRITE YOUR NAME");
    }
});