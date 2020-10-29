import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ficheprod',
  templateUrl: './ficheprod.component.html',
  styleUrls: ['./ficheprod.component.css']
})
export class FicheprodComponent implements OnInit {
  @Input() nom: string;
  @Input() description: string;
  @Input() prix: number;
  @Input() image: string;
  @Input() details : string;
 
 

  constructor() { }

  ngOnInit(): void {
  }

}
