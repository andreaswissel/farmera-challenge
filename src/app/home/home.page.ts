import {Component} from '@angular/core';
import {AnimalGroupService} from '../animal/animal-group.service';
import {AnimalGroup} from '../animal/animal-group.interface';
import {UserService} from '../user/user.service';
import {User} from '../user/user.interface';

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

    constructor(private animalGroupService: AnimalGroupService,
                private userService: UserService) {
        this.animalGroup = animalGroupService.getAnimalGroupById(0);

        userService.getTeam(1).subscribe((response: { info: object, results: User[] }) => {
            response.results.forEach(user => user.lastCheckin = 1601396201297);
            this.team = response.results;
        });

    }

    onCardExtend() {
        this.maxUsersVisible =
            this.maxUsersVisible > this.CARD_MIN_USERS_VISIBLE ? this.CARD_MIN_USERS_VISIBLE : this.CARD_MAX_USERS_VISIBLE;
    }

}
