import {Component, signal} from '@angular/core';
import {PonyModel} from '../models/pony-model';

@Component({
  selector: 'ns-ponies',
  imports: [],
  templateUrl: './ns-ponies.component.html',
  styleUrl: './ns-ponies.component.css'
})
export class NsPoniesComponent {
  readonly ponies = signal<Array<PonyModel>>([
    { id: 1, name: 'Rainbow Dash' },
    { id: 2, name: 'Pinkie Pie' }
  ]);
}
