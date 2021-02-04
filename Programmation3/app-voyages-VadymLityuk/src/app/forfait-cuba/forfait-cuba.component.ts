import { Component, OnInit } from '@angular/core';

import { Forfait } from '../forfaittest';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-forfait-cuba',
  templateUrl: './forfait-cuba.component.html',
  styleUrls: ['./forfait-cuba.component.css']
})
export class ForfaitCubaComponent implements OnInit {

  CubaForfaits: Array<Forfait> ;
 

  contains(destination, pays) {
    if (destination.includes(pays))
    {
      return true;
    }
  }
  constructor(private forfaitsService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();

  }
  getForfaits(): void {
    this.forfaitsService.getForfait()
        .subscribe(resultat => {
          this.CubaForfaits = resultat
        });

}

}
