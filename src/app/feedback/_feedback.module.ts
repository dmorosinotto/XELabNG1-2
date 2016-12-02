import { NgModule } from 'ng-metadata/core';

import myapp from '../index'; //OLD-LEGACY NG1 APP module.name

import { AskComponent } from './ask.component';
import { WelcomeComponent } from './welcome.component';
import { NameService } from './name.service';



@NgModule({
  imports: [
      myapp
  ],
  declarations: [
      AskComponent,
      WelcomeComponent
  ], 
  providers: [
      NameService
  ]
})
export class FeedbackModule { }
