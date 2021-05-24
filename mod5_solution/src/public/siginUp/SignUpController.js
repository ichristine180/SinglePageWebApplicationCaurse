(function () {
  "use strict";

  angular
    .module("restaurant")
    .controller("SignUpController", SignUpController)
    .controller("InfoController", InfoController);

  SignUpController.$inject = ["SignUpService"];
  InfoController.$inject = ["info"];
  function SignUpController(SignUpService) {
    var ctrl = this;
    ctrl.checkMenuExist = function () {
      SignUpService.checkMenuExist(ctrl.shortName).then((response) => {
        if (response.status == 500) {
          ctrl.exit = true;
        } else {
          SignUpService.signUp({
            firstName: ctrl.firstName,
            lastName: ctrl.lastName,
            phoneNumber: ctrl.phone,
            favorateDish: response.data,
            email: ctrl.email
          });
          ctrl.saved = true;
        }
      });
    };
  }

  function InfoController(info) {
    var ctrl = this;
    if (info === undefined) {
      ctrl.noInfo = true;
    } else {
      ctrl.info = info;
    }
  }
})();
