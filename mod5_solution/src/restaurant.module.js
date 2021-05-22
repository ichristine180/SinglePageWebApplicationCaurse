(function () {
  "use strict";

  /**
   * Restaurant module that includes the public module as a dependency
   */
  angular.module("restaurant", ["public"]).config(config);

  config.$inject = ["$urlRouterProvider", "$stateProvider"];
  function config($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state("siginUp", {
        url: "/SignUp",
        templateUrl: "src/public/siginUp/siginUp.html",
        controller: "SignUpController as ctrl",
      })
      .state("info", {
        url: "/info",
        template: "src/public/siginUp/info.html",
        controller: "InfoController as ctrl",
        resolve: {
          info: ["SignUpService",
            function (SignUpService) {
           return SignUpService.getInfo()
          }],
        },
      });

    // If user goes to a path that doesn't exist, redirect to public root
    $urlRouterProvider.otherwise("/");
  }
})();
