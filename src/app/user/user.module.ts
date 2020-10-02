import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {IonicModule} from '@ionic/angular';
import {TimeagoModule} from 'ngx-timeago';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [UserComponent],
    imports: [
        IonicModule,
        CommonModule,
        TimeagoModule,
        HttpClientModule
    ],
    exports: [
        UserComponent,
        TimeagoModule
    ]
})
export class UserModule {
}
