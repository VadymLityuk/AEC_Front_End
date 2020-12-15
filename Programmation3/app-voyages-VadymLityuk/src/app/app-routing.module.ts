import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForfaitCompComponent} from './forfait-comp/forfait-comp.component'

const routes: Routes = [

  {path: 'Accueil', component: ForfaitCompComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
