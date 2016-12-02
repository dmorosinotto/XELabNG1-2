import { Directive, HostListener, Output, EventEmitter } from "@angular/core";



@Directive({ selector: "[keys]" })
export class KeysDirective {
    constructor() {}

    @HostListener("keyup", ["$event"])
    onKeyUp(ev: KeyboardEvent) {
        if (ev.which==27) //ESC 
            this.onEsc.emit(ev);
    }

    @Output() public onEsc = new EventEmitter()
}

