import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Forfait } from './forfaittest';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {
    forfaitUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/';
   

     // forfaitUrl = 'https://forfaits-voyages.herokuapp.com/api/forfait';
     // https://forfaits-voyages.herokuapp.com/api/forfaits/da/
   // forfaitUrl = 'https://forfaits-voyages.herokuapp.com/api';


  constructor(private http: HttpClient) { }

  getForfait(): Observable<Forfait[]> {
    //return this.http.get<Forfait[]>(this.forfaitUrl + '/da/1996458/');  
    return this.http.get<Forfait[]>(this.forfaitUrl+'da/1996458/');  
  }

  addForfait(forfait: Forfait): Observable<Forfait> {
    return this.http.post<Forfait>(this.forfaitUrl, forfait, httpOptions);
  }

      /** PUT: mise à jour du héros */
      updateForfait(forfait: Forfait): Observable<any> {
        const id = forfait._id;
        return this.http.put<Forfait>(this.forfaitUrl + id, forfait, httpOptions);
    }

    /** DELETE: suppression du héros */
    deleteForfait(id: string): Observable<Forfait> {
        return this.http.delete<Forfait>(this.forfaitUrl + id, httpOptions);
    }


}
