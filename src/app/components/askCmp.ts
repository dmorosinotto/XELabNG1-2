import { app } from './../_app.module';

export function askCmp(): angular.IDirective {
    //DDO = Directive Definition Object - read more https://docs.angularjs.org/api/ng/service/$compile
    return {
        restrict: "E",
        scope: {
            msg: "<",
            req: "@",
            val: "=",
            res: "&onRes"
        },
        controller: AskCmp,
        controllerAs: "$ctrl",
        bindToController: true,
        templateUrl: 'src/app/components/askCmp.html'
    }
}

class AskCmp {
    constructor() {
        this.req = this.req || "Q";
        this.txt = this.val || "";
    }

    public res: ({$event: string}) => void; //external event handler
    private txt: string;//internal text bound
    public msg: string; //placeholder text
    public req: string; //label / question
    public val: any;    //external vm.name

    public undo() {
        this.txt = this.val || "";
    }

    public okemit(txt) {
        this.res({$event: txt});
    }

    $onChanges() {
        this.txt = this.val || "";
    }
}


app.directive("askCmp", askCmp )