import { app } from './../_app.module';


export const askCmp: angular.IComponentOptions = {
    //NG 1.5+ angular.component syntactic sugar - read more https://docs.angularjs.org/guide/component
        bindings: {
            msg: "<",
            req: "@",
            val: "=",
            res: "&onRes"
        },
        controller: AskCmp,
        template: require('./askCmp.html') //WEBPACK MAGIC INLINE HTML - ATTENTION REPLACE tempalteUrl: -> template: + relative path
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


askCmp.controller = AskCmp; //FIX undefined - BECAUSE class NOT HOISTING!
app.component("askCmp", askCmp )