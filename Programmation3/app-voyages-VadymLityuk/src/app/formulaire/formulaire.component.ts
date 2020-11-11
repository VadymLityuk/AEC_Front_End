import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  destinationsControl = new FormControl();
  villesDepartControl = new FormControl();
  villesDepart: string[] = ['Montréal','Québec', 'Kyiv'];
  destinations: string[] = ['Panama','Cuba','Turquie' ];

  constructor() { }

  ngOnInit(): void {
  }

}
