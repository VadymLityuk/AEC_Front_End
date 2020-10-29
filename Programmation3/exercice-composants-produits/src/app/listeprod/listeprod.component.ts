import { Component, OnInit} from '@angular/core';
import {Produit} from '../produit'


@Component({
  selector: 'app-listeprod',
  templateUrl: './listeprod.component.html',
  styleUrls: ['./listeprod.component.css']
  
  
  
})
export class ListeprodComponent implements OnInit {

  listeprods:  Produit[] = [
    {
      id: "0",
      nom: "Blade Runner",
      description: " Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years"
      ,
      prix: 18.99,
      image: "https://www.cleveland.com/resizer/XH-kA_Xl9jpNygllIUIG9vJI8bs=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.cleveland.com/home/cleve-media/width2048/img/ent_impact_movies/photo/screen-shot-2018-01-23-at-44232-pmpng-18d8ecafc04565a1.png",
      details: "fasfas " ,
       
      },
    {
      id: "1",
      nom: "AVENGERS",
      description: " Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years"
      ,
      prix: 26.99,
     
      image: "https://images-na.ssl-images-amazon.com/images/I/91e9898R7QL._RI_.jpg",

      details:" fasfa" ,
    }
  
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
