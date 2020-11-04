import { Forfait } from "./forfait";
import { HOTELS } from "./mock-hotels";

export const FORFAITS: Forfait[] = [
    {  id : "1",
        destination: "Panama City,Panama",
        villeDeDepart: "Montreal",
        hotel: HOTELS[0],
        dateDepart: "15 avril 2021",
        dateRetour: "21 avril 2021",
        prix: 2476 ,
        rabais : 70,
        forfaitVed: true,
     },
     {  id : "2",
     destination: "Panama City,Panama",
     villeDeDepart: "Montreal",
     hotel: HOTELS[1],
     dateDepart: "15 avril 2021",
     dateRetour: "21 avril 2021",
     prix: 1890 ,
     rabais : 70,
     forfaitVed: true,
  }
     
    
];