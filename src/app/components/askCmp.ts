import { app } from './../_app.module';
import { AskCtrl } from './../controllers/askCtrl';

export class AskCmp {
    static $inject = ["$scope"];
    constructor($scope: angular.IScope) {
        console.log($scope, "VM->", $scope.$parent.$parent["vm"]); //BINGOO!!!
        this.vm = $scope.$parent.$parent["vm"] as AskCtrl; //TEMPORARY HACK!!!
        this.val = this.vm.name; //SUPER HACK - NEVER DO THIS IN PRODUCTION!!!
        this.req = "Name:";
        this.msg = "Enter your name ...";
    }

    private vm: AskCtrl;//ref to call vm.show()
    private txt: string;//internal text bound
    public msg: string; //placeholder text
    public req: string; //label / question
    public val: any;    //external vm.name

    public undo() {
        this.txt = this.val = this.vm.name;
        this.vm.undo(); //TEMPORARY HACK!!
    }

    public okemit(txt) {
        this.vm.show(txt);//TEMPORARY HACK!!
    }
}

app.controller("askCmp", AskCmp )