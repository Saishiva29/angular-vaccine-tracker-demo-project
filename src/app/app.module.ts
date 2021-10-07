import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule, componentAvailForRoute } from './app.routing.module';
import { VaccineDataService } from './vaccine-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, componentAvailForRoute],
  bootstrap: [AppComponent],
  providers: [VaccineDataService],
})
export class AppModule {}
