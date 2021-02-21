import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfaittest';

@Pipe({
  name: 'mexique'
})
export class MexiquePipe implements PipeTransform {

  transform(forfaits: Forfait[]): Forfait[] {
    return forfaits.filter(Forfait => Forfait.destination === 'Mexique');
  }

}