import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClientComponent} from '../http-client/http-client.component';

@Injectable()
export class ServiceComponentService implements OnInit {

  ngOnInit(): void {
  }

  constructor(private httpClientComponent: HttpClientComponent) {
  }

  public getAllServices(): Promise<any> {
    return this.httpClientComponent.httpGet('/service');
  }


}
