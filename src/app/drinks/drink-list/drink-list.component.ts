import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {

  drinks = [
    {id: 1, name: 'drink 1'},
    {id: 2, name: 'drink 2'},
    {id: 3, name: 'drink 3'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
