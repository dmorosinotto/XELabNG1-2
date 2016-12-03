import * as angular from "angular";
import * as ngRoute from "angular-route";
import { QuestionService } from './feedback/question.service';
import { getInjectableName } from 'ng-metadata/core'

// DECLARE NG1 MODULE AND EVENTUALLY DEFINE constants + config / run
export let app = angular.module("myapp", [ngRoute])
    //.constant("WAIT",3000)
    .config(routesConfig)
;

// LEGACY NG1 angular-route CONFIGURATION
routesConfig.$inject = ["$routeProvider"];
export function routesConfig($routeProvider: angular.route.IRouteProvider){
  $routeProvider
    .when("/welcome", { template: "<welcome-cmp></welcome-cmp>" })
    .otherwise("welcome")
  //IF YOU NEED TO PASS DATA IN THE ROUTE USE 
  //, resolve: { "data": ()=>...any|ng.IPromise }
  //AND PASS IT TO COMPONENT @Input("=") r;
  //template: "<cmp r='$resolve'></cmp>" 
    .when("/wizard", { template: "<wizard-cmp r='$resolve'></wizard-cmp>" 
        , resolve: { "data": dataResolver } 
    })
;
}

//TRICK: TO GET THE SERVICE NAME FROM ng-metadata PROVIDER 
dataResolver.$inject = [getInjectableName(QuestionService)]
function dataResolver(qs: QuestionService) {
    return qs.getQuestions();
}