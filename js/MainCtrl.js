angular.module('assessment').controller('MainCtrl', function($scope, mainService, $stateParams){

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

    // if ($stateParams.id === 'shoes') {
    //     $scope.productData = productService.shoeData;
    // }
    // else if ($stateParams.id === 'socks') {
    //     $scope.productData = productService.sockData;
    // }
    
});
