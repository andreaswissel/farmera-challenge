import {Component} from '@angular/core';
import {AnimalGroupService} from '../animal/animal-group.service';
import {AnimalGroup} from '../animal/animal-group.interface';
import {UserService} from '../user/user.service';
import {User} from '../user/user.interface';
import {Alert} from '../alert/alert.interface';
import {AlertService} from '../alert/alert.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    private animalGroup: AnimalGroup;
    private CARD_MIN_USERS_VISIBLE = 1;
    private CARD_MAX_USERS_VISIBLE = 3;
    public team: User[] = [];
    public maxUsersVisible = 1;
    private alerts: Alert[];

    constructor(private animalGroupService: AnimalGroupService,
                private userService: UserService,
                private alertService: AlertService) {
        this.animalGroup = animalGroupService.getAnimalGroupById(0);

        userService.getTeam(1).subscribe((response: { info: object, results: User[] }) => {
            response.results.forEach(user => user.lastCheckin = 1601396201297);
            this.team = response.results;
        });

        alertService.getAlerts().subscribe((response: { alerts: Alert[] }) => {
            this.alerts = response.alerts;
        });
    }

    onCardExtend() {
        this.maxUsersVisible =
            this.maxUsersVisible > this.CARD_MIN_USERS_VISIBLE ? this.CARD_MIN_USERS_VISIBLE : this.CARD_MAX_USERS_VISIBLE;
    }

}
