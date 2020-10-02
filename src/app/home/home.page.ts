import { Component } from '@angular/core';
import {AnimalGroupService} from '../animal/animal-group.service';
import {AnimalGroup} from '../animal/animal-group.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private animalGroup: AnimalGroup;

  constructor(private animalGroupService: AnimalGroupService) {
    this.animalGroup = animalGroupService.getAnimalGroupById(0);
  }

}
