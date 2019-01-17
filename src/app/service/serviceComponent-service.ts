import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClientComponent} from '../http-client/http-client.component';

@Injectable()
export class ServiceComponentService implements OnInit {

  ngOnInit(): void {
  }

  constructor(private httpClientComponent: HttpClientComponent) {
  }

  public createServiceDefiniton(payload: any): Promise<any> {
    return this.httpClientComponent.httpPost('/service', payload);
  }

  public getAllServices(): Promise<any> {
    return this.httpClientComponent.httpGet('/service');
  }

  public getJsonSchemaForm (path: string): Promise<any> {
    return this.httpClientComponent.getJSON(path);
  }

  public getFunctions (): Promise<any> {
    return this.httpClientComponent.httpGet('/service/get-functions');
  }

}
