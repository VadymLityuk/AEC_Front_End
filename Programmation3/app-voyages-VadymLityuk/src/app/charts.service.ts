import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import  map  from 'rxjs/operators/map';


   
@Injectable()
export class ChartsService {

  constructor(private _http: HttpClient) { }

  dailyCharts() {
    return this._http.get("https://forfaits-voyages.herokuapp.com/api/reservations").pipe(
      map(result => result))
      //.map(result => result);
 
 
 }

  




//@Injectable() 
//export class ChartsService {

    
    //chartUrl = 'https://forfaits-voyages.herokuapp.com/api/reservations';

   // constructor(private http: HttpClient) { }

 
   //dailyCharts(){
       // return this.http.get("https://forfaits-voyages.herokuapp.com/api/reservations")
      // .map(result => result);
   // }*/
   // getCharts(): Observable<ChartsService[]> {
        //return this.http.get<Forfait[]>(this.forfaitUrl + '/da/1996458/');  
      //  return this.http.get<ChartsService[]>(this.chartUrl); 
   ////   }

//}


}
