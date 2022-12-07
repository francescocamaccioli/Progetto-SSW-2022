import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShowdbService } from './showdb.service';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationNameComponent } from './reservation-name/reservation-name.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, ReservationComponent, ReservationNameComponent],
  providers: [ShowdbService],
  bootstrap: [AppComponent],
})
export class AppModule {}
