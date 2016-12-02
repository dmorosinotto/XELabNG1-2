import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeedbackModule } from './feedback/_feedback.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeedbackModule,
  ],
  providers: [ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
