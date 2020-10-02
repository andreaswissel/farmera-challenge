import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';

import {HomePageRoutingModule} from './home-routing.module';
import {HeaderModule} from '../header/header.module';
import {UserModule} from '../user/user.module';
import {CardModule} from '../card/card.module';
import {AlertModule} from '../alert/alert.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        HeaderModule,
        CardModule,
        UserModule,
        AlertModule
    ],
    declarations: [HomePage]
})
export class HomePageModule {
}
