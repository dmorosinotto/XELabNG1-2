import { NgModule } from 'ng-metadata/core';

import myapp from '../index'; //OLD-LEGACY NG1 APP module.name

import { AskComponent } from './ask.component';
import { WelcomeComponent } from './welcome.component';
import { NameService } from './name.service';
import { KeysDirective } from './keys.directive';
import { QuestionService } from './question.service';



import { Injectable, Inject } from 'ng-metadata/core';
import { TableComponent } from './table.component';

@Injectable()
export class nameResolver {
  constructor(ns: NameService) {
  //resolve() {
    return <any>ns.name;
  }
}

routesConfig.$inject = ["$routeProvider"];
export function routesConfig($routeProvider: angular.route.IRouteProvider){
  $routeProvider
    .when("/table", { template: "<table-cmp r='$resolve'></table-cmp>"
          , resolve: { "name": nameResolver } 
    });
}



@NgModule({
  imports: [
      myapp
  ],
  declarations: [
      AskComponent,
      WelcomeComponent,
      KeysDirective,
      TableComponent
  ], 
  providers: [
      NameService,
      QuestionService,
      nameResolver,
      routesConfig
  ]
})
export class FeedbackModule {}