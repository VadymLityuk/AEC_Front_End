import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfaittest';
import { ForfaitService } from '../forfait.service';
import {MatTable} from '@angular/material/table';  // Permet de mettre à jour les données du tableau 
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide


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

  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    //this.newForfait = {_id: null, nom:''};
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
        .subscribe(result => this.forfaits = this.forfaits.filter(h => h !== forfait));
   }
   
}


