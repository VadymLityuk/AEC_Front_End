import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  
  heroes : string[]= HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}
