(function () {
  "use strict";
  angular
    .module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .constant("baseURL", " https://davids-restaurant.herokuapp.com/")
    .directive("foundItems", FoundItems);

  NarrowItDownController.$inject = ["MenuSearchService"];
  MenuSearchService.$inject = ["$http", "baseURL"];
  function NarrowItDownController(MenuSearchService) {
    var myCtrl = this;
    myCtrl.found = MenuSearchService.getMatchedMenuItems();
  }

  function MenuSearchService($http, baseURL) {
    var myService = this;

    myService.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "get",
        url: baseURL + "menu_items.json",
      }).then(function (response) {
        var menu_items = response.data.menu_items;
        var foundItems = menu_items.filter((items) =>
          items.description.includes(searchTerm)
        );
        return foundItems;
      });
    };
  }
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    ctrl.getMatchedMenuItems = function () {
      MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function (
        response
      ) {
        ctrl.found = response;
      });
    };
    ctrl.dontWantThisOne = function (index) {
      ctrl.found.splice(index, 1);
    };
  }

  function FoundItems() {
    var ddo = {
      templateUrl: "foundItems.html",
      scope: {
        found: "<",
        onRemove: "&",
      },
      controller: MenuListDirectiveController,
      controllerAs: "menu",
      bindToController: true,
    };
    return ddo;
  }

  function MenuListDirectiveController() {
    var menu = this;
  }
})();
