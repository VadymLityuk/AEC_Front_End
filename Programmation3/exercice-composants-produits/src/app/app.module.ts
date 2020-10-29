import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { EnteteComponent } from './entete/entete.component';
import { ListeprodComponent } from './listeprod/listeprod.component';
import { FooterComponent } from './footer/footer.component';
import { FicheprodComponent } from './ficheprod/ficheprod.component';
import { ProduitComponent } from './produit/produit.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    EnteteComponent,
    ListeprodComponent,
    FooterComponent,
    FicheprodComponent,
    ProduitComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
