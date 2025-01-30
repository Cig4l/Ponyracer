import { Component } from '@angular/core';
import {MenuComponent} from './menu/menu.component';
import {NsPoniesComponent} from './ns-ponies/ns-ponies.component';

@Component({
  selector: 'ns-root',
  imports: [
    MenuComponent,
    NsPoniesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ponyracer';
}
