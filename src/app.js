var app = angular.module("myapp",[]);

app.controller("askCtrl", ["nameSvc", function(svc) {
    var vm=this;
    var _old = vm.name = svc.name;
    
    vm.show = function() {
        svc.show(_old = vm.name);
    }

    vm.undo = function() {
        //console.log("UNDO", svc.name);
        vm.name = _old;
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

app.directive("keys", function(){
    //DDO = Directive Definition Object - read more https://docs.angularjs.org/api/ng/service/$compile
    var DDO = {
        restrict: "A",
        scope: {
            onEsc: "&"
        },
        controller: function($scope, $element, $attrs) {
            $element.on("keyup", onKeyUp);

            function onKeyUp(ev) {
                //console.log(ev);
                if (ev.which==27) //ESC 
                    $scope.$apply( $scope.onEsc({$event: ev}) );
            }

            $scope.$on("$destroy", function() { //LIFE-CYCLE $onDestroy
                $element.off("keyup", onKeyUp); //PREVENT MEMORY LEAK!!
            });
        }
    }
    return DDO;
})