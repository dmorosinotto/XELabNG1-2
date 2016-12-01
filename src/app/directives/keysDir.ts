import { app } from "../_app.module";

export function keysDir(): angular.IDirective {
    //DDO = Directive Definition Object - read more https://docs.angularjs.org/api/ng/service/$compile
    return {
        restrict: "A",
        scope: {
            onEsc: "&"
        },
        controller: keysCtrl
    }
}

type EventHandler<T> = (payload: {$event: T}) => any;
interface _Scope extends angular.IScope {
    onEsc: EventHandler<any>;
}

class keysCtrl {
    static $inject = ["$scope", "$element", "$attrs"];
    constructor($scope: _Scope, $element: angular.IAugmentedJQuery , $attrs: angular.IAttributes) {
        $element.on("keyup", onKeyUp);

        function onKeyUp(ev) {
            if (ev.which==27) //ESC 
                $scope.$apply( $scope.onEsc({$event: ev}) );
        }

        $scope.$on("$destroy", function() { //LIFE-CYCLE $onDestroy
            $element.off("keyup", onKeyUp); //PREVENT MEMORY LEAK!!
        });
    }
}



app.directive("keys", keysDir);