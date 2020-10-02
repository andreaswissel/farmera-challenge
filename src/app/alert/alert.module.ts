import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertComponent} from './alert.component';
import {TimeagoModule} from 'ngx-timeago';

@NgModule({
  declarations: [AlertComponent],
  exports: [
    AlertComponent,
    TimeagoModule
  ],
  imports: [
    CommonModule,
    TimeagoModule
  ]
})
export class AlertModule { }
