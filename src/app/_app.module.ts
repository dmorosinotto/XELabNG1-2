import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ 
    { provide: "TEST", useValue: "TUTTO OK!" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
