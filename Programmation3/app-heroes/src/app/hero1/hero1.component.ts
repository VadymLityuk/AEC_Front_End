import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-hero1',
  templateUrl: './hero1.component.html',
  styleUrls: ['./hero1.component.css']
})
export class Hero1Component implements OnInit {

   @Input() hero : string;

  constructor() { }

  ngOnInit(): void {
  }

}
