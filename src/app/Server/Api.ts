import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';


const httpOption={
                    headers:new HttpHeaders
                      ({
                        'Content-type':'application/json'
                      })
                  };

@Injectable()
  export class Api{
                    static getFleet() {
                                        throw new Error("Method not implemented.");
                                      }
                    constructor(private httpClient:HttpClient){}
    
                    getData():Observable<any> {
                                                return this.httpClient.get("http://www.mocky.io/v2/5ddff0833500006d00480a36") //office
                                              }

                    getFleet():Observable<any>{
                                                return this.httpClient.get("http://www.mocky.io/v2/5de688df3700005a00092472")
                                              }
                  }