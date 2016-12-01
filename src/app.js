





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