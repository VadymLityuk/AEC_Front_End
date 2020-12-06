import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Formulaire } from '../formulaire';
import { duree } from '../mock-duree';
import { caracterHotel } from '../mock-caracterHotel';


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']

})
export class RechercheComponent implements OnInit {
  @Input() formulaire: Formulaire;
  @Output() Changeform= new EventEmitter();

     
  TableDuree: Array<number> = duree;
    dateDepart: Date;
    duree: number;
    NombEtoiles: number;
    minDateDepart: Date= new Date;
    caracters: string[] = caracterHotel;
  
  
    ngOnInit() {
    
     
    }
    changeDateDepart(nouvelleValeur) {
      let nouveauFormulaire : Formulaire =  {dateDepart: nouvelleValeur, 
                                              duree : this.formulaire.duree, 
                                              nbetoiles:this.formulaire.nbetoiles,
                                              caracterHotel:this.formulaire. caracterHotel,
                                            };
      this.formulaire = nouveauFormulaire;
      this. Changeform.emit(nouveauFormulaire);
    }
    changeDuree(nouvelleValeur) {
      let nouveauFormulaire : Formulaire =  {dateDepart: this.formulaire.dateDepart, 
                                              duree : nouvelleValeur, 
                                              nbetoiles:this.formulaire.nbetoiles,
                                              caracterHotel:this.formulaire. caracterHotel,
                                            };
      this.formulaire = nouveauFormulaire;
      this. Changeform.emit(nouveauFormulaire);
    }
    changeNbetoiles(nouvelleValeur) {
      let nouveauFormulaire : Formulaire =  {dateDepart: this.formulaire.dateDepart, 
                                              duree : this.formulaire.duree, 
                                              nbetoiles:nouvelleValeur,
                                              caracterHotel:this.formulaire.caracterHotel,
                                            };
      this.formulaire = nouveauFormulaire;
      this. Changeform.emit(nouveauFormulaire);
    }
   
  }