import { app } from "../_app.module";
import { NameSvc } from './../services/nameSvc';

export const welcomeCmp: angular.IComponentOptions = {
    //NG 1.5+ angular.component syntactic sugar - read more https://docs.angularjs.org/guide/component
        controller: WelcomeCtrl,
        templateUrl: 'src/app/components/welcomeCmp.html'
    }

export class WelcomeCtrl {
static $inject = ["nameSvc"];
constructor(public svc: NameSvc) {}

    public set(name) {
        this.svc.show(name);
    }
}

welcomeCmp.controller = WelcomeCtrl; //FIX undefined - BECAUSE class NOT HOISTING!
app.component("welcomeCmp", welcomeCmp);