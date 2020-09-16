import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerClockComponent } from './timer-clock/timer-clock.component';
import { TimerApiService } from './service/timer-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TimerClockComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [TimerApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
