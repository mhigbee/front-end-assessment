angular.module('assessment', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './views/home.html',
            controller: 'MainCtrl'
        })
        .state('blog', {
            url: '/blog',
            templateUrl: './views/blog.html',
            controller: 'MainCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/views/about.html',
            controller: 'MainCtrl'
        })
        .state('shop', {
            url: '/shop',
            templateUrl: '/views/shop.html',
            controller: 'MainCtrl'
        })
        .state('product', {
            url: 'detail/:id',
            templateUrl: '/views/product-details.html',
            controller: 'MainCtrl'
        });

    $urlRouterProvider
        .otherwise('/');
});