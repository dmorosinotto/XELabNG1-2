import { Component, Inject } from "@angular/core";
import { NameService } from './name.service';

//import '../styles.css' //ONLY TO SHOW INLINE CSS FOR COMPONENTS VIA WEBPACK

@Component({
    selector: "welcome-cmp",
    templateUrl: './welcomeCmp.html'
})
export class WelcomeComponent {
constructor(public svc: NameService) {}

    public set(name) {
        this.svc.show(name);
    }
}

