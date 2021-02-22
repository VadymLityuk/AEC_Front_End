import { Component, OnInit,Input } from '@angular/core';
import { Forfait } from '../forfaittest';


@Component({
  selector: 'app-newforfait',
  templateUrl: './newforfait.component.html',
  styleUrls: ['./newforfait.component.css']
})
export class NewforfaitComponent implements OnInit {

  @Input () forfait : Forfait;

  constructor() { }

  ngOnInit(): void {
  }

}
