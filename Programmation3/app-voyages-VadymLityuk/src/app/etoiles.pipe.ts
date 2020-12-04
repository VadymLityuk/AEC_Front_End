import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'etoiles'
})
export class NombreEtoilesPipe implements PipeTransform {

  transform(forfaits: Forfait[]): Forfait[] {
    return forfaits.filter(Forfait => Forfait.hotel.nbetoiles > 5);
  }

}