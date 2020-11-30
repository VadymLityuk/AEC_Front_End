import { Forfait } from "./forfait";
import { HOTELS } from "./mock-hotels";

export const FORFAITS: Forfait[] = [
    {  id : "1",
        destination: "Panama City,Panama",
        villeDeDepart: "Montréal",
        hotel: HOTELS[0],
        dateDepart: new Date(2020,8,15),
        dateRetour:new Date(2020,8,22),
        prix: 2476 ,
        rabais : 70,
        forfaitVed: true,
        special:true
     },
     {  id : "2",
     destination: "Cayo Santa Maria,Cuba",
     villeDeDepart: "Québec",
     hotel: HOTELS[1],
     dateDepart: new Date(2020,4,30),
     dateRetour: new Date(2020,5,13),
     prix: 800 ,
     rabais : 0,
     forfaitVed: false,
     special:false
  },
  {  id : "3",
  destination: "Antalya,Turquie",
  villeDeDepart: "Kyiv",
  hotel: HOTELS[2],
  dateDepart: new Date(2020,6,4),
  dateRetour: new Date(2020,6,11),
  prix: 1650 ,
  rabais : 120,
  forfaitVed: true,
  special:true
}
     
    
];