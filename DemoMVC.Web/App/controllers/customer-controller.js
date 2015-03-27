app.controller('helloCtrl', function ($scope, CustomerService) {

    // 取得所有客戶
    $scope.getcustomers = function () {
        CustomerService.query().$promise.then(function (result) {
            $scope.model = result;
        });
    };

    // 新增
    $scope.create = function (customer) {
        CustomerService.save(customer).$promise.then(function () {
            $scope.getcustomers();
            $scope.getEmpty();
            $scope.isRevised(false)
        });
    };

    // 更新
    $scope.update = function (customer) {
        CustomerService.update(customer).$promise.then(function () {
            $scope.getcustomers();
            $scope.getEmpty();
            $scope.isRevised(false)
        });
    };

    // 刪除
    $scope.delete = function (sid) {
        CustomerService.delete({ id: sid }).$promise.then(function () {
            $scope.getcustomers();
        });
    };


    // 取得ViewModel
    $scope.getEmpty = function () {
        CustomerService.get({ id: 0 }).$promise.then(function (result) {
            $scope.customer = result;
        });
    };

    $scope.revise = function (item) {
        $scope.customer = item;
        $scope.isRevised(true);
    };

    $scope.isRevised = function (status) {
        $scope.isrevise = status;
        if (!$scope.isrevise) {
            $scope.getEmpty();
        }
    };

    

    $scope.getEmpty();
    $scope.getcustomers();
    $scope.isRevised(false);

});

app.filter('clean', function () {
    return function (str) {
        return str.toUpperCase().replace(/\s+/g, '-');
    };
});