import {Component, input} from '@angular/core';
import {RaceModel} from '../models/race-model/race-model';

@Component({
  selector: 'ng-race',
  imports: [],
  templateUrl: './race.component.html',
  styleUrl: './race.component.css'
})
export class RaceComponent {
  readonly raceModel = input.required<RaceModel>();
}
