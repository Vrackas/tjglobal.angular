;(function () {

    'use strict';

    angular
        .module('app')
        .controller('HeaderBlockController', HeaderBlockController);

    HeaderBlockController.$inject = ['$state', '$rootScope'];

    function HeaderBlockController($state, $rootScope) {
        let vm = this;

        vm.showMenu = showMenu;
        vm.isMenuShow = false;

        function showMenu() {
            vm.isMenuShow = !vm.isMenuShow;
        }

    }
})();
