import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapRoutingModule } from './map-routing.module';
import { Api } from '../Server/Api';
import {HttpClientModule} from'@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
   HttpClientModule,
  CommonModule,
    MapRoutingModule,
  ],
  providers: [Api]
})
export class MapModule { }
