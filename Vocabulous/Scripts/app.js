var app = angular.module("Vocabulous", []);

app.controller('DictionaryCtrl', function ($scope, $http) {

    $scope.vocabulary = [];

    $scope.getDictionary = function () {

        var req = {
            method: "GET",
            url: "http://api.pearson.com/v2/dictionaries/entries?headword=cold",
            //headers: {
            //    "app_id": "ffc1dd88",
            //    "app_key": "fca7ccadd6301ca07d286ea20c59392e"
            //}
        }

        $http(req)
                   .then(function (response) {
                       console.log($scope.vocabulary);
                       $scope.vocabulary = response;
                   }
                   ,function (error) {
                       console.log("failed!");
                       debugger
                    });
    }

    return $scope.vocabulary;
});