import { NgModule } from 'ng-metadata/core';

import myapp from '../index'; //OLD-LEGACY NG1 APP module.name

import { AskComponent } from './ask.component';



@NgModule({
  imports: [
      myapp
  ],
  declarations: [
      AskComponent
  ], 
  providers: [
  ]
})
export class FeedbackModule { }
