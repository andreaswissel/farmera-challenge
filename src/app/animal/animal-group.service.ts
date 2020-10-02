import { Injectable } from '@angular/core';
import {AnimalGroup} from './animal-group.interface';
import {animalGroupMocks} from './animal-group.mocks';

@Injectable({
  providedIn: 'root'
})
export class AnimalGroupService {

  constructor() { }

  getAnimalGroupById(id: number): AnimalGroup {
    return animalGroupMocks[id];
  }
}
