import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// tslint:disable-next-line:max-line-length
import { AgmCoreModule, DataLayerManager, KmlLayerManager, PolygonManager, PolylineManager, CircleManager, InfoWindowManager, MarkerManager, GoogleMapsAPIWrapper } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here: https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBTlbtSwaIuj4LwfvnppYHW4UJ1pLA9ikI'
    })
  ],
  providers: [
    GoogleMapsAPIWrapper,
    MarkerManager,
    InfoWindowManager,
    CircleManager,
    PolylineManager,
    PolygonManager,
    KmlLayerManager,
    DataLayerManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
