import {Component, computed, input} from '@angular/core';
import {PonyModel} from '../models/pony-model/pony-model';

@Component({
  selector: 'ns-pony',
  imports: [],
  templateUrl: './pony.component.html',
  styleUrl: './pony.component.css'
})
export class PonyComponent {
  readonly ponyModel = input.required<PonyModel>();
  readonly ponyImageUrl = computed(() => `/images/pony-${this.ponyModel().color.toLowerCase()}.gif`);
  readonly ponyFigcaption = computed(() => this.ponyModel().name);
  readonly ponyImageAlt = computed(() => `${this.ponyModel().color.toLowerCase()} pony`);
  readonly ponyCLicked = computed(() => this.ponyModel());
}
