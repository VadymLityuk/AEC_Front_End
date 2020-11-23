import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-etoiles',
  templateUrl: './etoiles.component.html',
  styleUrls: ['./etoiles.component.css']
})
export class EtoilesComponent implements OnInit {

  @Input() nbetoiles: number;

  constructor() { }

  ngOnInit(): void {
  }

}
