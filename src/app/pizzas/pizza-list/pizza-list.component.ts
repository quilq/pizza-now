import { Component, OnInit } from '@angular/core';

import { Pizza, PizzaSize, PizzaType } from '../pizza.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  pizzas: Pizza[] = [
    { _id: '1', name: 'pizza 1', type: PizzaType.favorite, size: PizzaSize.small, ingredients: [], price: 0 },
    { _id: '2', name: 'pizza 2', type: PizzaType.premium, size: PizzaSize.medium, ingredients: [], price: 0 },
    { _id: '3', name: 'pizza 3', type: PizzaType.signature, size: PizzaSize.large, ingredients: [], price: 0 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
