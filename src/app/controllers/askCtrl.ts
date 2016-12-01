import { app } from "../_app.module";

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