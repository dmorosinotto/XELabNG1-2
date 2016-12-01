import { app } from "../_app.module";

app.factory("nameSvc", function() {
    var _name = "";

    function set_Show(val) {
        _name = val;
        if (_name) {
            alert("Hi, " + _name);
        } else alert("WRITE YOUR NAME");
    }

    return {
        name: _name,
        show: set_Show
    };
});