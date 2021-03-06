import { Component, OnInit,Input,Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { Forfait } from '../forfait';

//import { FORFAITS } from '../mock-forfaits';
import {caracterHotel} from '../mock-caracterHotel';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Forfait } from '../forfaittest';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  destinations: string[] =['Panama City','Antalya','Cayo Santa Maria','Cuba', 'Jamaïque', 'Mexique', 'Japon', 'ALASKA' ];
  Filtredform: Observable<string[]>;
  filtredDepart: Observable<string[]>;
  CaracteristiqueGenerale: string[] = caracterHotel;
  nom: string;
  adresse: string;
  nbChambres: number;
  dateDepart: Date;
  dateRetour: Date;
  minimalDateDepart: Date= new Date;
  minimalDateRetour: Date= new Date;
  prix: number;

  hotel: string = "";


  constructor(
    public dialogRef: MatDialogRef<FormulaireComponent>, 
    @Inject(MAT_DIALOG_DATA) public newForfait: Forfait) {
      
     }
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

  onClose(): void {
    this.dialogRef.close();
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





