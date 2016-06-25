angular.module('assessment').service('mainService', function($http){
    this.getProducts = function(){
        return $http({
            method:'GET',
            url: 'https://dev-assessment.firebaseio.com/products.json'
        }).then(function(response){
            return response.data;
        })
    };
    

});
