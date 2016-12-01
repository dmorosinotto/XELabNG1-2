var app = angular.module("myapp",[]);

app.controller("askCtrl", function(){
    var vm=this;
    //vm.name = "Daniele";

    vm.show = function() {
        if (vm.name) {
            alert("Hi, " + vm.name);
        } else alert("WRITE YOUR NAME");
    }
});