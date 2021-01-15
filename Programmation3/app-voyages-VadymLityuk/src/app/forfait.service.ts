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
    forfaitUrl = 'https://guarded-mesa-24051.herokuapp.com/api/';

     // forfaitUrl = 'https://forfaits-voyages.herokuapp.com/api/forfait';

  constructor(private http: HttpClient) { }

  getForfait(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitUrl + 'heros');  
  }

  addForfait(forfait: Forfait): Observable<Forfait> {
    return this.http.post<Forfait>(this.forfaitUrl + 'hero', forfait, httpOptions);
  }

      /** PUT: mise à jour du héros */
      updateForfait(forfait: Forfait): Observable<any> {
        const id = forfait._id;
        return this.http.put<Forfait>(this.forfaitUrl + 'hero/' + id, forfait, httpOptions);
    }

    /** DELETE: suppression du héros */
    deleteForfait(id: string): Observable<Forfait> {
        return this.http.delete<Forfait>(this.forfaitUrl + 'hero/' + id, httpOptions);
    }


}
