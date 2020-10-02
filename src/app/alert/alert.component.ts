import {Component, Input, OnInit} from '@angular/core';
import {AlertService} from './alert.service';
import {Alert} from './alert.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() alert: Alert;

  constructor(private alertService: AlertService) {
  }

  ngOnInit(): void {
  }

}
