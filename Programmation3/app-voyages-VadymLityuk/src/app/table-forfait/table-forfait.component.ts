import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfaittest';
import { ForfaitService } from '../forfait.service';
import {MatTable} from '@angular/material/table';
import { NgForm } from '@angular/forms';  
import{ MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormulaireComponent } from '../formulaire/formulaire.component';

@Component({
  selector: 'app-table-forfait',
  templateUrl: './table-forfait.component.html',
  styleUrls: ['./table-forfait.component.css']
})
export class TableForfaitComponent implements OnInit {

  forfaits: Forfait[];
  
  columnsToDisplay = ['nomHotel','prix','destination','dateDepart','dateRetour', 'actions',];
  //columnsToDisplay = ['nom', 'actions'];
  newForfait : Forfait;
  selectedForfait: Forfait;

  constructor(private forfaitService: ForfaitService, public dialog: MatDialog) { }

  ngOnInit(): void {
    //Initialise l'objet newForfait
    
    this.newForfait = {_id: null, destination:'', villeDepart:'', hotel: {nom:'', adresse:'',nbetoiles :0, nbChambres:0, caracteristiques: [],photo: ''}, dateDepart: null, dateRetour: null, prix: 0, rabais: 0, vedette: false};
    //Appelle de la fonction à l'ouverture de la page, importe les infos
    this.getForfait();
  }

  getForfait(): void {
    this.forfaitService.getForfait()
        .subscribe(resultat => this.forfaits = resultat);
  }

  onAdd(tableForfaits: MatTable<Forfait>, forfaitFormAjout: NgForm) {
    if(forfaitFormAjout.valid) {
      this.forfaitService.addForfait(this.newForfait)
          .subscribe(forfait  => { this.forfaits.push(forfait); forfaitFormAjout.resetForm(); tableForfaits.renderRows();});
    }
  }

  onSelect(forfait: Forfait): void {
    this.selectedForfait = forfait;
  }

  onEdit(forfaitFormEdition: NgForm): void {
    if (forfaitFormEdition.valid) {
      this.forfaitService.updateForfait(this.selectedForfait)
          .subscribe(() => this.selectedForfait = null);
    }
   }
   

   onDelete(forfait: Forfait): void {
    this.forfaitService.deleteForfait(forfait._id)
        .subscribe(result => this.forfaits = this.forfaits.filter(f => f !== forfait));
   }
   

   openDialogNewForfait(): void {
     
    const dialogRef = this.dialog.open(FormulaireComponent, {
    width: '80%',
    height: '80%',
    data: this.newForfait,
    
  });
  
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    if(result) {
      this.newForfait = result;
      this.forfaitService.addForfait(this.newForfait)
          .subscribe(forfait  => { this.forfaits.push(forfait); this.newForfait._id = null; this.newForfait.destination=''; this.newForfait.hotel.nom='';this.newForfait.hotel.adresse=''; this.newForfait.hotel.nbetoiles=0; this.newForfait.hotel.nbChambres=null; this.newForfait.hotel.caracteristiques; this.newForfait.villeDepart='';  this.newForfait.dateDepart= null; this.newForfait.dateRetour= null; this.newForfait.prix= null; this.newForfait.rabais= null; this.newForfait.vedette= false; 
        // this.table.renderRows()
        });
    }
  });
}
openDialogEditForfait(forfait: Forfait): void {
  this.selectedForfait = forfait;
  const dialogRef = this.dialog.open(FormulaireComponent, {
  width: '70%',
  height: '70%',
  data: this.selectedForfait, 
  
});
dialogRef.afterClosed().subscribe(result => {
  console.log('The dialog was closed');
  if(result) {
    this.selectedForfait = result;
    this.forfaitService.updateForfait(this.selectedForfait)
        .subscribe(() => this.selectedForfait = null);
  }
});
console.log(this.selectedForfait)
}
}
  
   





