import { Component, OnInit } from '@angular/core';

import { Forfait } from '../forfaittest';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-mexique',
  templateUrl: './mexique.component.html',
  styleUrls: ['./mexique.component.css']
})
export class MexiqueComponent implements OnInit {

  MexForfaits: Array<Forfait> ;
 

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
          this.MexForfaits = resultat
        });

}

}

