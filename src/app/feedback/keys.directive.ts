import { Directive, HostListener, Output, EventEmitter } from "ng-metadata/core";



@Directive({ selector: "[keys]" })
export class KeysDirective {
    constructor() {}

    @HostListener("keyup", ["$event"])
    onKeyUp(ev: KeyboardEvent) {
        if (ev.which==27) //ESC 
            this.onEsc.emit(ev);
        if (ev.which==13) //ENTER 
            this.onEnter.emit(ev);
    }

    @Output() public onEsc = new EventEmitter()
    @Output() public onEnter = new EventEmitter()
}

