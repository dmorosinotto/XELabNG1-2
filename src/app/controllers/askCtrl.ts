import { app } from "../_app.module";
import { NameSvc } from './../services/nameSvc';

class AskCtrl {
static $inject = ["nameSvc"];
constructor(private svc: NameSvc) {
    this._old = this.name = svc.name;
}
private _old;
public name;

    public show() {
        this.svc.show(this._old = this.name);
    }

    public undo() {
        //console.log("UNDO", svc.name);
        this.name = this._old;
    }
}

app.controller("askCtrl", AskCtrl);