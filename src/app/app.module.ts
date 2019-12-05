import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_ID } from '@angular/core';
import { AgmCoreModule} from '@agm/core'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { FleetComponent } from './fleet/fleet.component';
import {HttpClientModule} from'@angular/common/http';
import { Api } from './Server/Api';


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    MapComponent,
    FleetComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // Google map key(apiKey)
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyBbscT8H9SfouaXQnEqLTyLLlb4Mu3iNV0"
    }),
    RouterModule.forRoot([
      {path:"map",component:MapComponent},  

      {path:"fleet",component:FleetComponent }

    ])
  ],
  providers: [Api], //Api
  bootstrap: [AppComponent]
})
export class AppModule { }
 