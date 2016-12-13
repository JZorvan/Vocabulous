var app = angular.module("Vocabulous", []);

app.controller('DictionaryCtrl', function ($scope, $http) {

    $scope.userInput = "";
    $scope.vocabulary = [];
    
    $scope.getDictionary = function () {

        var req = {
            method: "GET",
            url: "http://api.pearson.com/v2/dictionaries/entries?headword=cold",
        }

        $http(req)
                   .then(function (response) {
                       console.log($scope.vocabulary);
                       console.log($scope.userInput)
                       $scope.vocabulary = response;
                   }
                   ,function (error) {
                       console.log("failed!");
                       debugger
                    });
    }

    return $scope.vocabulary;
});