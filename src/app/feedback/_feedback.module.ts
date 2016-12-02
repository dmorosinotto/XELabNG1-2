import { NgModule } from 'ng-metadata/core';

import myapp from '../index'; //OLD-LEGACY NG1 APP module.name

import { AskComponent } from './ask.component';
import { WelcomeComponent } from './welcome.component';



@NgModule({
  imports: [
      myapp
  ],
  declarations: [
      AskComponent,
      WelcomeComponent
  ], 
  providers: [
  ]
})
export class FeedbackModule { }
