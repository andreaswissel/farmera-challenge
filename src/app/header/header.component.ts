import {Component, Input, OnInit} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {AnimalGroup} from '../animal/animal-group.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() animalGroup: AnimalGroup;

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit(): void {
  }

  getBirthdateFromTimestamp(birthdate: number) {
    return Math.floor((Date.now() - birthdate) / 1000 / 60 / 60 / 24 / 7);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Add pigs',
        icon: 'add-circle',
        handler: () => {
          console.log('Add clicked');
        }
      }, {
        text: 'Move pigs',
        icon: 'share',
        handler: () => {
          console.log('Move clicked');
        }
      }, {
        text: 'Sell pigs',
        icon: 'cash',
        handler: () => {
          console.log('Sell clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
