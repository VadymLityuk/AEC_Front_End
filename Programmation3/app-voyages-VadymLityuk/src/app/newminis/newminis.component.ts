import { Component, OnInit,Input } from '@angular/core';
import { Forfait } from '../forfaittest';




@Component({
  selector: 'app-newminis',
  templateUrl: './newminis.component.html',
  styleUrls: ['./newminis.component.css']
})
export class NewminisComponent implements OnInit {

  @Input () forfait : Forfait;

  constructor() { }

  ngOnInit(): void {
  }

}
