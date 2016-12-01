// import polyfills
import './polyfills.ts';
import './vendor.ts';


import { platformBrowserDynamic } from 'ng-metadata/platform-browser-dynamic';
import { AppModule } from './app/_app.module';


platformBrowserDynamic().bootstrapModule(AppModule);

