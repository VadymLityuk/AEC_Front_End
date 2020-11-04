import { Component } from '@angular/core';
import { Forfait } from './forfait';
import { Hotel } from './hotel';
import { FORFAITS } from './mock-forfaits';
import {HOTELS} from './mock-hotels'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-voyages-VadymLityuk';
  mesForfaits: Array<Forfait> = FORFAITS;
  mesHotels: Array<Hotel> = HOTELS;
  

  ngOnInit(): void {
    console.log('Mes forfaits',this.mesForfaits);
    console.log('Mes Hotels',this.mesHotels);
  }
}
