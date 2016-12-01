import { NgModule } from 'ng-metadata/core';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  ],
  providers: [ 
    { provide: "TEST", useValue: "TUTTO OK!" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
