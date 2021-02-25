import { Component, OnInit,Input } from '@angular/core';
import { Forfait } from '../forfaittest';
import { ForfaitService } from '../forfait.service';


@Component({
  selector: 'app-touteforfaits',
  templateUrl: './touteforfaits.component.html',
  styleUrls: ['./touteforfaits.component.css']
})
export class TouteforfaitsComponent implements OnInit {

  @Input () forfait : Forfait;

  MexForfaits: Forfait[];


  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfait();
  }

  getForfait(): void {
    this.forfaitService.getForfait()
        .subscribe(resultat => this.MexForfaits = resultat);
  }


}
