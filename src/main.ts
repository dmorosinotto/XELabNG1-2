// import polyfills
import './polyfills.ts';
import './vendor.ts';


import { platformBrowserDynamic } from 'ng-metadata/platform-browser-dynamic';
import { FeedbackModule } from './app/feedback/_feedback.module';

platformBrowserDynamic().bootstrapModule(FeedbackModule);