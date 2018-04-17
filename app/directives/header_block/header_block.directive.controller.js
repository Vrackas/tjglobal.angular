;(function () {

    'use strict';

    angular
        .module('app')
        .controller('HeaderBlockController', HeaderBlockController);

    HeaderBlockController.$inject = ['$state', '$rootScope'];

    function HeaderBlockController($state, $rootScope) {
        let vm = this;

        // vm.test = test;

        // function test() {
        //
        //     $('.menu_open').addClass('active_menu_open');
        //     // $rootScope.menu = true;
        //     console.log($rootScope.menu);
        // }

    }
})();
