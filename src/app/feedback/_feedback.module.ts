import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AskComponent } from './ask.component';
import { WelcomeComponent } from './welcome.component';
import { NameService } from './name.service';
import { KeysDirective } from './keys.directive';



@NgModule({
  imports: [
      CommonModule,
      FormsModule
  ],
  declarations: [
      AskComponent,
      WelcomeComponent,
      KeysDirective
  ], 
  providers: [
      NameService
  ]
})
export class FeedbackModule { }
