import { Component, OnInit } from '@angular/core';

import { ChartsService } from '../charts.service';
import {ForfaitService} from '../forfait.service'
import { Forfait } from '../forfaittest';


@Component({ 
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.css']
})
export class GraphiqueComponent implements OnInit {
  ChartTable: Forfait[];
  newForfait : Forfait;

  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.newForfait = {_id: null, dateDepart: new Date, dateRetour: new Date, hotel:{nom:'', caracteristiques:[], adresse:'',photo: '', nbChambres:0, nbetoiles:0}, prix:0, destination:'', villeDepart:'', rabais:0, vedette:false}
    this.getForfaits();
  }

  getForfaits(): void {  
    this.forfaitService.getForfait()
        .subscribe(resultat => this.ChartTable = resultat);
  }
  
  // Graphique
   public mongraphique = {
    type : 'bar',
    legende : true,
    options : { responsive: true, maintainAspectRatio: false }
  };

  public mesdonnees = {
    annes : ['JAMAÏQUE', 'CUBA', 'EUROPE', 'ALASKA', 'ASIE', 'JAPON', 'COSTA-RICA'],
    data : [ 
      { data: [12, 98, 35, 8, 3, 12, 40], label: '0-10 ANS' },
      { data: [44, 135, 97, 31, 25, 76, 140], label: '10-30 ANS' },
      { data: [63, 145, 65, 16, 18, 30, 87], label: '30-65 ANS' },
      
    ]
  }; 

}