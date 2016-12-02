import { Component, OnChanges, Input, Output, EventEmitter } from "ng-metadata/core"

@Component({
    selector: "ask-cmp", 
    template: require('./askCmp.html') //WEBPACK MAGIC INLINE HTML
})
export class AskComponent implements OnChanges {
    constructor() {
        this.req = this.req || "Q";
        this.txt = this.val || "";
    }

    @Output("onRes") public res = new EventEmitter<string>() //external event handler
    private txt: string;//internal text bound
    @Input("<") public msg: string; //placeholder text
    @Input("@") public req: string; //label / question
    @Input("=") public val: any;    //external vm.name

    public undo() {
        this.txt = this.val || "";
    }

    public okemit(txt) { 
        this.res.emit(txt); //emit use RxJS
    }

    ngOnChanges() { //old life-cycle $onChanges()
        this.txt = this.val || "";
    }
}

