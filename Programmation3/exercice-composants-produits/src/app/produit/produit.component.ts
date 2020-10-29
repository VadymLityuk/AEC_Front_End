import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() nom: string;
  @Input() description: string;
  @Input() prix: number;
  @Input() details: string;

  constructor() { }

  ngOnInit(): void {
  }

}
