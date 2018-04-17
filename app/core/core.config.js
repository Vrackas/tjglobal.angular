;(function () {
    angular
        .module('app')
        .config(mainConfig)
    // .config(['$mdIconProvider', function ($mdIconProvider) {
    //     $mdIconProvider
    //         .iconSet('social', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg', 24)
    //         .defaultIconSet('bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg', 24);
    // }]);

    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function mainConfig($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'templates/homepage/homepage.html',
                controller: 'HomepageController',
                controllerAs: 'vm',
            })
            .state('about_us', {
                url: '/about_us',
                templateUrl: 'templates/about_us/about_us.html',
                controller: 'AboutUsController',
                controllerAs: 'vm',
            })
            .state('company', {
                url: '/company',
                templateUrl: 'templates/company/company.html',
                controller: 'CompanyController',
                controllerAs: 'vm',
            })
            .state('banks', {
                url: '/banks',
                templateUrl: 'templates/banks/banks.html',
                controller: 'BanksController',
                controllerAs: 'vm',
            })
            .state('contacts', {
                url: '/contacts',
                templateUrl: 'templates/contacts/contacts.html',
                controller: 'ContactsController',
                controllerAs: 'vm',
            })
            .state('forex', {
                url: '/forex',
                templateUrl: 'templates/forex/forex.html',
                controller: 'ForexController',
                controllerAs: 'vm',
            })
            .state('e-commerce', {
                url: '/e-commerce',
                templateUrl: 'templates/e-commerce/e-commerce.html',
                controller: 'ECommerceController',
                controllerAs: 'vm',
            })
            .state('license', {
                url: '/license',
                templateUrl: 'templates/license/license.html',
                controller: 'LicenseController',
                controllerAs: 'vm',
            })
            .state('legal_opinion', {
                url: '/legal_opinion',
                templateUrl: 'templates/legal_opinion/legal_opinion.html',
                controller: 'LegalOpinionController',
                controllerAs: 'vm',
            })
            .state('condition', {
                url: '/condition',
                templateUrl: 'templates/condition/condition.html',
                controller: 'ConditionController',
                controllerAs: 'vm',
            })
            .state('policy', {
                url: '/policy',
                templateUrl: 'templates/policy/policy.html',
                controller: 'PolicyController',
                controllerAs: 'vm',
            })
            .state('policy_company', {
                url: '/policy_company',
                templateUrl: 'templates/policy_company/policy_company.html',
                controller: 'PolicyCompanyController',
                controllerAs: 'vm',
            })
            .state('kyc', {
                url: '/kyc',
                templateUrl: 'templates/kyc/kyc.html',
                controller: 'KYCController',
                controllerAs: 'vm',
            })


    }


})();

