import { app } from "../_app.module";

export class NameSvc {
    public name = "";

    public show(val) {
        this.name = val;
        if (this.name) {
            alert("Hi, " + this.name);
        } else alert("WRITE YOUR NAME");
    }
}

app.service("nameSvc", NameSvc);