import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent implements OnInit {
  formatLabel(value: number) {
    if (value >= 5) {
      return Math.round(value / 5) + 'etoiles';
    }

    return value;
  }
  destinationsControl = new FormControl();
  villesDepartControl = new FormControl();
  filteredDestinations:  Observable<string[]>;
  filteredVillesDepart:  Observable<string[]>;
  villesDepart: string[] = ['Montréal','Québec', 'Kyiv'];
  destinations: string[] = ['Panama','Cuba','Turquie' ];

  

  constructor() { }

  ngOnInit(): void {
  }

}

