(function () {
  "use strict";

  angular.module("restaurant").service("SignUpService", SignUpService);
  SignUpService.$inject = ["$http"];
  function SignUpService($http) {
    var service = this;

    service.checkMenuExist = function (shortName) {
      return $http
        .get(
          "https://ichristine-mod5-solution.herokuapp.com/menu_items/" +
            shortName +
            ".json"
        )
        .then(
          function (response) {
            return response;
          },
          function (error) {
            return error;
          }
        );
    };

    service.signUp = function (data) {
      console.log(data)
      service.data = data;
    };

    service.getInfo = function () {
     return service.data;
    };
  }
})();
