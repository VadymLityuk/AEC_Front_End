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

  Control = new FormControl();
  ControlDepart = new FormControl();
  filteredDestinations:  Observable<string[]>;
  filteredVillesDepart:  Observable<string[]>;
  villesDepart: string[] = ['Montréal','Québec', 'Kyiv'];
  destinations: string[] =['Panama City','Antalya','Cayo Santa Maria'];
  Filtredform: Observable<string[]>;
  filtredDepart: Observable<string[]>;
  

  constructor() { }
  

  ngOnInit(): void {
    this.Filtredform = this.Control.valueChanges.pipe(
      startWith(''),
      map(value => this._myfilter(value))
    );
    this.filtredDepart = this.ControlDepart.valueChanges.pipe(
    startWith(""),
    map(value => this._myfilter2(value))
  );
  }
  
  private _myfilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.villesDepart.filter(option => option.toLowerCase().includes(filterValue));
  }
   private _myfilter2(value: string): string[] {
    const filterValue2 = value.toLowerCase();

    return this.destinations.filter(
      destinations => destinations.toLowerCase().indexOf(filterValue2) === 0
    );
  }
  
}





