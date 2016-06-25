angular.module('assessment').controller('MainCtrl', function($scope, mainService){

    $scope.products = [];

    var init = function () {
        mainService.getProducts()
            .then(function(response) {
                $scope.products = response;
                console.log($scope.products);
            })
        };
    init();

    console.log($scope.products)

    
});
