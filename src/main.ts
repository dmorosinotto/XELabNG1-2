// import polyfills
import './polyfills.ts';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/_app.module';

platformBrowserDynamic().bootstrapModule(AppModule);