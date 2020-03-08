import { Component, OnInit } from '@angular/core';

import { Sides } from '../sides.model';

@Component({
  selector: 'app-sides-list',
  templateUrl: './sides-list.component.html',
  styleUrls: ['./sides-list.component.scss']
})
export class SidesListComponent implements OnInit {

  sidesList: Sides[] = [
    {_id: '1', name: 'sides 1', price: 0},
    {_id: '2', name: 'sides 2', price: 0},
    {_id: '3', name: 'sides 3', price: 0},
    {_id: '4', name: 'sides 4', price: 0},
    {_id: '5', name: 'sides 5', price: 0},
    {_id: '6', name: 'sides 6', price: 0},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
