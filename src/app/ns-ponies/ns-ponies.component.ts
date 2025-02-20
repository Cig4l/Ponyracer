import {Component, signal} from '@angular/core';
import {PonyModel} from '../models/pony-model/pony-model';

@Component({
  selector: 'ns-ponies',
  imports: [],
  templateUrl: './ns-ponies.component.html',
  styleUrl: './ns-ponies.component.css'
})
export class NsPoniesComponent {
  readonly ponies = signal<Array<PonyModel>>([
    { id: 1, name: 'Rainbow Dash', color: "BLUE"  },
    { id: 2, name: 'Pinkie Pie', color: "PURPLE"  }
  ]);

  refreshPonies() {
    if(this.ponies().length < 4) {
      this.ponies.set([
        ...this.ponies(),
        { id: 3, name: 'Fluttershy', color: "ORANGE" },
        { id: 4, name: 'Rarity', color: "GREEN" }
      ]);
    }
  }
}

