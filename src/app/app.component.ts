import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
    public title: string;
    constructor(@Inject("TEST") public test) {
        this.title = "XE Lab NG1 - NG2"
    }
}
