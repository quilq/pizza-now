import { Component, OnInit } from '@angular/core';

import { Drink } from '../drink.model';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {

  drinks: Drink[] = [
    {_id: '1', name: 'drink 1', price: 0},
    {_id: '2', name: 'drink 2', price: 0},
    {_id: '3', name: 'drink 3', price: 0},
    {_id: '4', name: 'drink 4', price: 0},
    {_id: '5', name: 'drink 5', price: 0},
    {_id: '6', name: 'drink 6', price: 0},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
