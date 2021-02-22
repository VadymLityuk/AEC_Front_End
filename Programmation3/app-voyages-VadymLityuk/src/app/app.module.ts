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
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';

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
import { NavbarComponent } from './navbar/navbar.component';
import { TableForfaitComponent } from './table-forfait/table-forfait.component';
import {MatTableModule} from '@angular/material/table';

import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
 import {ChartsService} from './charts.service';
import { ForfaitService } from './forfait.service';
import { GraphiqueComponent } from './graphique/graphique.component';
import { PiechartComponent } from './piechart/piechart.component';
import { ForfaitCubaComponent } from './forfait-cuba/forfait-cuba.component';
import { MexiqueComponent } from './mexique/mexique.component';
import { AproposComponent } from './apropos/apropos.component';
import { NewforfaitComponent } from './newforfait/newforfait.component';
import { NewminisComponent } from './newminis/newminis.component';
//import { ChartPieComponent } from './chart-pie/chart-pie.component';



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
    NavbarComponent,
    TableForfaitComponent,
    GraphiqueComponent,
    PiechartComponent,
    ForfaitCubaComponent,
    MexiqueComponent,
    AproposComponent,
    NewforfaitComponent,
    NewminisComponent,
    
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatTableModule,  
    HttpClientModule,
    ChartsModule,
  
  ],
  providers: [ForfaitService,ChartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
