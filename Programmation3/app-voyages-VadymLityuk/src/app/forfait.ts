import { Hotel } from './hotel';


export interface Forfait {
    _id : string;
    destination: string,
    villeDeDepart: string,
    hotel: Hotel,
    dateDepart: Date;
    dateRetour: Date;
    prix: number;
    rabais : number;
    forfaitVed: boolean,
    special:boolean
    

}