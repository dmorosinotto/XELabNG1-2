import { app } from "../_app.module";
import { NameSvc } from './../services/nameSvc';

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

app.controller("askCtrl", AskCtrl);