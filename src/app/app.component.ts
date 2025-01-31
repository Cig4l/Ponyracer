import {Component, computed, signal} from '@angular/core';
import {MenuComponent} from './menu/menu.component';
import {NsPoniesComponent} from './ns-ponies/ns-ponies.component';
import {RacesComponent} from './races/races.component';

@Component({
  selector: 'ns-root',
  imports: [
    MenuComponent,
    NsPoniesComponent,
    RacesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ponyracer';
}
