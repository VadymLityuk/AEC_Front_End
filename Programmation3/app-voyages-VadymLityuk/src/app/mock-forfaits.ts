import { Forfait } from "./forfait";
import { HOTELS } from "./mock-hotels";

export const FORFAITS: Forfait[] = [
    {  id : "1",
        destination: "Panama City,Panama",
        villeDeDepart: "Montréal",
        hotel: HOTELS[0],
        dateDepart: "15 avril 2021",
        dateRetour: "21 avril 2021",
        prix: 2476 ,
        rabais : 70,
        forfaitVed: true,
     },
     {  id : "2",
     destination: "Cayo Santa Maria,Cuba",
     villeDeDepart: "Montréal",
     hotel: HOTELS[1],
     dateDepart: "15 avril 2021",
     dateRetour: "21 avril 2021",
     prix: 800 ,
     rabais : 70,
     forfaitVed: true,
  },
  {  id : "3",
  destination: "Antalya,Turquie",
  villeDeDepart: "Kyiv",
  hotel: HOTELS[2],
  dateDepart: "4 juin 2021",
  dateRetour: "11 juin 2021",
  prix: 1650 ,
  rabais : 120,
  forfaitVed: true,
}
     
    
];