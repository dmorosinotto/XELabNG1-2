import { Injectable } from 'ng-metadata/core'

@Injectable()
export class NameService {
    public name = "";

    public show(val) {
        this.name = val;
        if (this.name) {
            alert("Hi, " + this.name);
        } else alert("WRITE YOUR NAME");
    }
}
