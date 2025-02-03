import {Component, inject} from '@angular/core';
import {MenuComponent} from './menu/menu.component';
import {RacesComponent} from './races/races.component';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'ns-root',
  imports: [
    MenuComponent,
    RacesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ponyracer';

  constructor() {
    inject(Title).setTitle('PonyRacer - Bet on ponies');
  }
}
