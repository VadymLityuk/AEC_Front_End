import { Component, OnInit,Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';
import { Formulaire } from '../formulaire';
import {caracteristique} from '../mock-caracteristique';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent implements OnInit {
  @Input() formulaire: Formulaire;
  Control = new FormControl();
  ControlDepart = new FormControl();
  filteredDestinations:  Observable<string[]>;
  filteredVillesDepart:  Observable<string[]>;
  villesDepart: string[] = ['Montréal','Québec', 'Kyiv'];
  destinations: string[] =['Panama City','Antalya','Cayo Santa Maria'];
  Filtredform: Observable<string[]>;
  filtredDepart: Observable<string[]>;
  ForfaitGenerale: Forfait[] = FORFAITS;
  CaracteristiqueGenerale: string[] = caracteristique;

  hotel: string = "";

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

    return this.villesDepart.filter(depart => depart.toLowerCase().includes(filterValue));
  }
   private _myfilter2(value: string): string[] {
    const filterValue2 = value.toLowerCase();

    return this.destinations.filter(
      destinations => destinations.toLowerCase().indexOf(filterValue2) === 0
    );
  }
  
}





