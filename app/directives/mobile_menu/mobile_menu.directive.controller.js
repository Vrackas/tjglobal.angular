;(function () {

    'use strict';

    angular
        .module('app')
        .controller('MobileMenuController', MobileMenuController);

    MobileMenuController.$inject = ['$state', '$rootScope'];

    function MobileMenuController($state,$rootScope) {
        let vm = this;

        // $("#menu_open").click(function () {
        //     console.log('hiiiiii');
        //     // $('.menu_open').addClass('active_menu_open')
        // //
        // });
        // $('.menu-close').click(function () {
        //     // $('.menu_open').removeClass('active_menu_open')
        // });

        // vm.company = company;
        // vm.banks = banks;
        // vm.about = about;
        // vm.contacts = contacts;
        //
        // if ($rootScope.menu = true) {
        //      $('.menu_open').addClass('active_menu_open')
        // }
        //
        // function company() {
        //     $state.go('')
        // };
        //
        // function banks() {
        //     $state.go('')
        // };
        //
        // function about() {
        //     $state.go('')
        // };
        //
        // function contacts() {
        //     $state.go('')
        // };
    }
})();
