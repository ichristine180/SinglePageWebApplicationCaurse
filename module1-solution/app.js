(function () {
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
      $scope.lunch = "";
       $scope.message = "";
       $scope.color = "";
    var splitString = function () {
      var data = $scope.lunch;
      var newlunch = data.split(",");
      return newlunch;
    };
    $scope.checklunch = function () {
      var size = splitString().length;
      if (splitString()[0] == "") {
        $scope.message = "Please enter data first";
        $scope.color = "danger";
      } else if (size <= 3) {
        $scope.message = "Enjoy!";
        $scope.color = "success";
      } else {
        $scope.message = "Too much!";
        $scope.color = "success";
      }
      return $scope.message;
    };
  }
})();
