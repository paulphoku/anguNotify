import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgxOneSignalModule } from 'ngx-onesignal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('OneSignalSDKWorker.js', { enabled: environment.production }),
    NgxOneSignalModule.forRoot({ appId: 'c28338f9-bdb6-4a00-93c8-882e73307d53'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
