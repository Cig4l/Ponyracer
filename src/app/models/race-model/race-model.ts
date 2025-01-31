import {PonyModel} from '../pony-model/pony-model';

export class RaceModel {
  id: number;
  name: string;
  ponies: PonyModel[];
  startInstant: string;

  constructor(id: number, name: string, ponies: PonyModel[], startInstant: string) {
    this.id = id;
    this.name = name;
    this.ponies = ponies;
    this.startInstant = startInstant;
  }
}
