import { NgModule } from 'ng-metadata/core';

import myapp from '../index'; //OLD-LEGACY NG1 APP module.name

import { AskComponent } from './ask.component';
import { WelcomeComponent } from './welcome.component';
import { NameService } from './name.service';
import { KeysDirective } from './keys.directive';
import { QuestionService } from './question.service';



@NgModule({
  imports: [
      myapp
  ],
  declarations: [
      AskComponent,
      WelcomeComponent,
      KeysDirective,
  ], 
  providers: [
      NameService,
      QuestionService,
  ]
})
export class FeedbackModule {}