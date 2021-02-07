import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForfaitCompComponent} from './forfait-comp/forfait-comp.component'
import {TableForfaitComponent} from './table-forfait/table-forfait.component'
import {GraphiqueComponent} from './graphique/graphique.component'
import { ForfaitCubaComponent } from './forfait-cuba/forfait-cuba.component';
//import {MexiqueComponent} from './Mexique/Mexique.component';

const routes: Routes = [

  {path: 'Accueil', component: ForfaitCompComponent, pathMatch: 'full' },
   
  {path: 'TableForfait', component: TableForfaitComponent, pathMatch: 'full' },

  {path: 'Graphique', component: GraphiqueComponent, pathMatch: 'full' },

  
  {path: 'Cuba', component: ForfaitCubaComponent, pathMatch: 'full' },
  
  //{path: 'Mexique', component: MexiqueComponent, pathMatch: 'full' }



  //app-forfait-cuba
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
