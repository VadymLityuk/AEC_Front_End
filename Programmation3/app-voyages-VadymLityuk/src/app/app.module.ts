import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { ForfaitCompComponent } from './forfait-comp/forfait-comp.component';
import { ListeForfaitComponent } from './liste-forfait/liste-forfait.component';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ListeElementsComponent } from './liste-elements/liste-elements.component';



@NgModule({
  declarations: [
    AppComponent,
    ForfaitComponent,
    ForfaitCompComponent,
    ListeForfaitComponent,
    MiniForfaitComponent,
    EtoilesComponent,
    FormulaireComponent,
    SidenavComponent,
    RechercheComponent,
    ListeElementsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatSliderModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
