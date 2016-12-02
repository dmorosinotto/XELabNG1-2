import { Component, Inject } from "ng-metadata/core";

import '../styles.css' //ONLY TO SHOW INLINE CSS FOR COMPONENTS VIA WEBPACK

@Component({
    selector: "welcome-cmp",
    template: require('./welcomeCmp.html') //WEBPACK MAGIC INLINE HTML
})
export class WelcomeComponent {
constructor(@Inject("nameSvc") public svc) {}

    public set(name) {
        this.svc.show(name);
    }
}

