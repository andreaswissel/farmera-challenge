import {Injectable} from '@angular/core';
import {alertMocks} from './alert.mocks';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {
  }

  getAlerts() {
    return new Observable((observer) => {
      observer.next({alerts: alertMocks});
      observer.complete();
    });
  }
}
