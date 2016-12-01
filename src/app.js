var app = angular.module("myapp",[]);

app.controller("askCtrl", ["nameSvc", function(svc) {
    var vm=this;
    vm.name = svc.name;

    vm.show = function() {
        svc.show(vm.name);
    }
}]);

app.factory("nameSvc", function() {
    var _name = "";

    function set_Show(val) {
        _name = val;
        if (_name) {
            alert("Hi, " + _name);
        } else alert("WRITE YOUR NAME");
    }

    return {
        name: _name,
        show: set_Show
    };
});