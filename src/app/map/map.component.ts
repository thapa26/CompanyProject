import { Component, OnInit } from '@angular/core';
import { Api } from '../Server/Api';// import Api
import { DataComponent } from '../data/data.component'; // import DataComponent


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {
  lstget:DataComponent; 
  constructor(private _Api:Api){}
  ngOnInit() {
     this._Api.getData() //Moniter data
    .subscribe
    (
      data=>
      {
        this.lstget=data;
        console.log(data);
      }
    ) 
  }

  // default location
  latitude =28.434962; 
  longitude =76.980900; 
  locationchoose=false

  // marked location
 marker :
 marker[]=[
            {
              lat:28.474030,
              lng:76.95,
            },
            {
              lat:28.443534,
              lng:76.968506  
            },
              {
              lat:29.001734,
              lng:77.083939
            },{
              lat:28.656449,
              lng:76.692551
              
            },{
              lat:28.930846,
              lng:77.664841
              
            },{
              lat:28.680548,
              lng:77.785690
              
            },{
              lat:29.348264,
              lng:76.983688
              
            },{
              lat:28.415157,
              lng:76.500290
              
            },{
              lat:28.462108,
              lng:77.070642
              
            }
 ]

onChoseLocation(event){
    this.latitude=event.coords.lat;
    this.longitude=event.coords.lng;
    this.locationchoose=true;
}
}


interface marker{
    lat:number;
    lng:number;
}
