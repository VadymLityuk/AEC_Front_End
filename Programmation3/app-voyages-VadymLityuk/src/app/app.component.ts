import { Component } from '@angular/core';
import { Forfait } from './forfait';
import { FORFAITS } from './mock-forfaits';

export interface Grandr {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-voyages-VadymLityuk';
  grandeur: Grandr[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightgray'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightpurple'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
