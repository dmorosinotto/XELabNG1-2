import { app } from "../_app.module";
import { NameSvc } from './../services/nameSvc';

export const welcomeCmp: angular.IComponentOptions = {
    //NG 1.5+ angular.component syntactic sugar - read more https://docs.angularjs.org/guide/component
        controller: AskCtrl,
        templateUrl: 'src/app/components/welcomeCmp.html'
    }

export class AskCtrl {
static $inject = ["nameSvc"];
constructor(private svc: NameSvc) {
    this._old = this.name = svc.name;
}
private _old;
public name;

    public show(name) {
        this.name = name;
        this.svc.show(this._old = name);
    }

    public undo() {
        console.log("UNDO", this.svc.name);
        this.name = this._old;
    }
}

welcomeCmp.controller = AskCtrl; //FIX undefined - BECAUSE class NOT HOISTING!
app.component("welcomeCmp", welcomeCmp);