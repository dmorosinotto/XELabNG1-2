import { Component, Inject } from "ng-metadata/core";
import { NameService } from './name.service';

//import '../styles.css' //ONLY TO SHOW INLINE CSS FOR COMPONENTS VIA WEBPACK

@Component({
    selector: "welcome-cmp",
    template: require('./welcomeCmp.html') //WEBPACK MAGIC INLINE HTML
})
export class WelcomeComponent {
constructor(public svc: NameService) {}

    public set(name) {
        this.svc.show(name);
    }
}

