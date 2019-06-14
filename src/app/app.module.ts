import { Routing } from './routing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TimeslotsComponent } from './timeslots/timeslots.component';
import { HttpClientModule } from '@angular/common/http';
import { UserdataComponent } from './userdata/userdata.component';
import { WelcomeComponent } from './welcome/welcome.component';
//import { AvailableComponent } from './shared/available.ts/available.component';

const Route= new Routing();


@NgModule({
  declarations: [
    AppComponent,
    TimeslotsComponent,
    UserdataComponent,
    WelcomeComponent,
    
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
     Route.appRoute )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
