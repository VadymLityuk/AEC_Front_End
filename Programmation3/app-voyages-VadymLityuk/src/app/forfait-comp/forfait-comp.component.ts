import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { Hotel } from '../hotel';
import { FORFAITS } from '../mock-forfaits';
import {HOTELS} from '../mock-hotels'
import { Formulaire } from '../formulaire';

@Component({
  selector: 'app-forfait-comp',
  templateUrl: './forfait-comp.component.html',
  styleUrls: ['./forfait-comp.component.css']
})
export class ForfaitCompComponent implements OnInit {
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


