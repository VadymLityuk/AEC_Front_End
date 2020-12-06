import { Component } from '@angular/core';
import { Forfait } from './forfait';
import { Hotel } from './hotel';
import { FORFAITS } from './mock-forfaits';
import {HOTELS} from './mock-hotels'
import { Formulaire } from './formulaire';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-voyages-VadymLityuk';
  mesForfaits: Array<Forfait> = FORFAITS;
  mesHotels: Array<Hotel> = HOTELS;
  formulaire :Formulaire = {
    dateDepart: new Date,
    duree: 0,
    nbetoiles: 1,
    caracterHotel: [''],
  }

  ngOnInit(): void {
    console.log('Mes forfaits',this.mesForfaits);
    console.log('Mes Hotels',this.mesHotels);
  }
}
