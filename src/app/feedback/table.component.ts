import { Component, Input, OnInit } from 'ng-metadata/core';
import { QuestionService, Question } from './question.service';

@Component({
    selector: "table-cmp",
    template: `
<ul>
    <li ng-repeat="curr in $ctrl.data">
        <ask-cmp msg="curr.help" 
            req="{{curr.text}}"  
            val="curr.resp" 
            on-res="curr.resp=$event" >
        </ask-cmp>
    </li>
</ul>
<button class="btn btn-success" ng-click="$ctrl.save()">SAVE</button>
    `
})

export class TableComponent implements OnInit {
    @Input("=") public r;

    private name: string;
    private data: Question[];
    constructor(private qs: QuestionService) {
        this.qs.getQuestions()
            .then (q => this.data = q);
    }

    ngOnInit() { //OLD life-cycle $onInit() 
        //console.log("$resolve=", this.r);
        this.name = this.r["name"];
    }

    public save() {
        this.qs.saveResponse(this.name, this.data);
    }
}
