import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Forfait } from './forfaittest';
import { Observable } from 'rxjs';

import { Charts } from './charts';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {
    forfaitUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/';
    reservationsUrl= 'https://forfaits-voyages.herokuapp.com/api/reservations';
   

     // forfaitUrl = 'https://forfaits-voyages.herokuapp.com/api/forfait';
     // https://forfaits-voyages.herokuapp.com/api/forfaits/da/
   // forfaitUrl = 'https://forfaits-voyages.herokuapp.com/api';
//reservationsUrl= 'https://forfaits-voyages.herokuapp.com/api/reservations';

  constructor(private http: HttpClient) { }

  getForfait(): Observable<Forfait[]> {
    //return this.http.get<Forfait[]>(this.forfaitUrl + '/da/1996458/');  
    return this.http.get<Forfait[]>(this.forfaitUrl+'da/1996458/');  
  }

  addForfait(forfait: Forfait): Observable<Forfait> {
    return this.http.post<Forfait>(this.forfaitUrl, forfait, httpOptions);
  }

      /** PUT */
      updateForfait(forfait: Forfait): Observable<any> {
        const id = forfait._id;
        return this.http.put<Forfait>(this.forfaitUrl + id, forfait, httpOptions);
    }

    /** DELETE*/
    deleteForfait(id: string): Observable<Forfait> {
        return this.http.delete<Forfait>(this.forfaitUrl + id, httpOptions);
    }

    getCharts(): Observable<Charts[]> {
      return this.http.get<Charts[]>(this.reservationsUrl);
    }


}
