import { Component, OnInit } from '@angular/core';

import { Label } from 'ng2-charts';
import {Charts} from '../charts'
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts'
import {ForfaitService} from '../forfait.service'
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  
  reservations: Charts[];
  reservationsDestinationTableau: Array<number>= [];
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Réservations', 'Europe'], ['Réservations', 'Asie'], ['Réservations', 'Sud'], ['Réservations', 'Nord']];
  public pieChartData: SingleDataSet = this.reservationsDestinationTableau;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors:Array<any> = [{
    backgroundColor: ['#FFEBCD', '#FFE4B5', '#F4A460', '#F0FFFF'],
    borderColor: ['rgba(135,206,250,1)', 'rgba(106,90,205,1)', 'rgba(148,159,177,1)', 'green']
  }];

  constructor(private forfaitService: ForfaitService) {
   
  }

  ngOnInit(): void {
    this.getCharts();
   

   }
  
  calculReservationsTable(){
    let sud: number = 0;
    let asie: number = 0;
    let europe: number = 0;
    let nord: number = 0;

    let tableauRes = this.reservations;
   
     tableauRes.forEach(element => {
      let destination = element.destination;
      if( destination === 'Sud'){
          sud++;
      }
      else if( destination === 'Asie'){
          asie++;
      }
      else if( destination === 'Europe'){
          europe++;
      }
      else if( destination === 'Grand Nord'){
         nord++;
      }
     });
      this.reservationsDestinationTableau.push(sud);
      this.reservationsDestinationTableau.push(asie);
      this.reservationsDestinationTableau.push(europe);
      this.reservationsDestinationTableau.push(nord);

    console.log(this.reservationsDestinationTableau);
  }
 
  getCharts(): void {
    this.forfaitService.getCharts()
        .subscribe((resultat) => {this.reservations = resultat;
     this.calculReservationsTable();});
  }
}