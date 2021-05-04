(function () {
  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);
  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

  function ToBuyController(ShoppingListCheckOffService) {
    var buyController = this;
    buyController.items = ShoppingListCheckOffService.getTobuy();
    buyController.bought = function (index) {
      ShoppingListCheckOffService.bought(index);
    };
  }

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtController = this;
    boughtController.items = ShoppingListCheckOffService.getBouth();
    boughtController.isEmpty = ShoppingListCheckOffService.checkIfIsEmpty(
      boughtController.items
    );
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuy = [
      { name: "cookies", quantity: 10 },
      { name: "beer", quantity: 5 },
      { name: "rice", quantity: 1 },
      { name: "bombon", quantity: 20 },
    ];
    var bought = [];

    service.checkIfIsEmpty = function (arr) {
      if (arr.length === 0) return true;
      else return false;
    };
    service.getTobuy = function () {
      return toBuy;
    };
    service.bought = function (index) {
      var item = toBuy.splice(index, 1);
      bought.push({ name: item[0].name, quantity: item[0].quantity });
    };
    service.getBouth = function () {
      return bought;
    };
  }
})();
