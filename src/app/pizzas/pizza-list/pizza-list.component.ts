import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  pizzas = [
    {id: 1, name: 'pizza 1', type: 'premium', size: 'small', ingerdients: '', price: ''},
    {id: 2, name: 'pizza 2', type: 'signature', size: 'medium', ingerdients: '', price: ''},
    {id: 3, name: 'pizza 3', type: 'favorite', size: 'large', ingerdients: '', price: ''}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
