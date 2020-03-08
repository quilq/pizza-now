import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pizza-now';

  links = ['pizzas', 'drinks', 'sides'];
  activeLink = this.links[0];

}
