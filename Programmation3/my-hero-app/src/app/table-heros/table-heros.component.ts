import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {MatTable} from '@angular/material/table';  // Permet de mettre à jour les données du tableau 
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide


@Component({
  selector: 'app-table-heros',
  templateUrl: './table-heros.component.html',
  styleUrls: ['./table-heros.component.css']
})
export class TableHerosComponent implements OnInit {
  heros: Hero[];
  columnsToDisplay = ['nom', 'actions'];
  newHero : Hero;
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.newHero = {_id: null, nom:''};
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros()
        .subscribe(resultat => this.heros = resultat);
  }

  onAdd(tableHeros: MatTable<Hero>, heroFormAjout: NgForm) {
    if(heroFormAjout.valid) {
      this.heroService.addHero(this.newHero)
          .subscribe(hero  => { this.heros.push(hero); heroFormAjout.resetForm(); tableHeros.renderRows();});
    }
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  onEdit(heroFormEdition: NgForm): void {
    if (heroFormEdition.valid) {
      this.heroService.updateHero(this.selectedHero)
          .subscribe(() => this.selectedHero = null);
    }
   }
   
   onDelete(hero: Hero): void {
    this.heroService.deleteHero(hero._id)
        .subscribe(result => this.heros = this.heros.filter(h => h !== hero));
   }
   


}
