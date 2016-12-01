import { Component, Inject } from 'ng-metadata/core';

@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
})
export class AppComponent {
    public title: string;
    constructor(@Inject("TEST") public test) {
        this.title = "XE Lab NG1 - NG2"
    }
}
