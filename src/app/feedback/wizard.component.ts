import { app } from './../_app.module';
import { Question } from './question.service';

const wizardCmp: angular.IComponentOptions = {
    bindings: {
        r: "="
    },
    controller: WizardComponent,
    template: `
        <ask-cmp msg="$ctrl.curr.help" req="{{$ctrl.curr.text}}"  
            val="$ctrl.curr.resp" on-res="$ctrl.curr.resp=$event" >
        </ask-cmp>
        <button ng-click="$ctrl.prev()">&lt; PREV</button>
        <button ng-click="$ctrl.next()">&gt; NEXT</button>
        <button ng-click="$ctrl.onSave()">SAVE</button>
    `
}

export class WizardComponent {
    public r;

    private data: Question[];
    private _idx: number;
    
    constructor() {
        this._idx = 0;
    }

    $onInit() {
        //console.log("$resolve=", this.r);
        this.data = this.r["data"];
    }

    public get curr(): Question {
        return this.data[this._idx];
    }

    public next() {
        if (this._idx<this.data.length-1) this._idx++;
    }

    public prev() {
        if (this._idx>0) this._idx--;
    }

    public onSave() {
        window.alert(JSON.stringify(this.data,null,4));
    }
}

wizardCmp.controller = WizardComponent;
app.component("wizardCmp", wizardCmp)