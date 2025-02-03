import {Component, input} from '@angular/core';
import {RaceModel} from '../models/race-model/race-model';
import {PonyComponent} from '../pony/pony.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'ng-race',
  imports: [
    PonyComponent,
    DatePipe
  ],
  templateUrl: './race.component.html',
  styleUrl: './race.component.css'
})
export class RaceComponent {
  readonly raceModel = input.required<RaceModel>();
}
