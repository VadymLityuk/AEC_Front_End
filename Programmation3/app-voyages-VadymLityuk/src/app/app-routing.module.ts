import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForfaitCompComponent} from './forfait-comp/forfait-comp.component'
import {TableForfaitComponent} from './table-forfait/table-forfait.component'
import {GraphiqueComponent} from './graphique/graphique.component'
import { ForfaitCubaComponent } from './forfait-cuba/forfait-cuba.component';
import {AproposComponent} from './apropos/apropos.component';
import {MexiqueComponent} from './Mexique/Mexique.component';

const routes: Routes = [

  {path: 'Accueil', component: ForfaitCompComponent},
   
  {path: 'TableForfait', component: TableForfaitComponent},

  
  {path: 'Apropos', component: AproposComponent},

  {path: 'Graphique', component: GraphiqueComponent},

  
  {path: 'Cuba', component: ForfaitCubaComponent},
  
  {path: 'TouteForfait', component: MexiqueComponent, pathMatch: 'full' }



  //app-forfait-cuba
];  

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
