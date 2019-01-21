import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClientComponent} from '../http-client/http-client.component';

@Injectable()
export class ConfigurationComponentService implements OnInit {

  ngOnInit(): void {
  }

  constructor(private httpClientComponent: HttpClientComponent) {
  }

  public createServiceDefiniton(payload: any): Promise<any> {
    debugger;
    return this.httpClientComponent.httpPost('/api/config/save-configuration', payload);
  }
/*
  public getAllServices(): Promise<any> {
    return this.httpClientComponent.httpGet('/service');
  }

  public getServiceById(id: number): Promise<any> {
    return this.httpClientComponent.httpGet('/service?id=' + id);
  }*/

  public getJsonSchemaForm (path: string): Promise<any> {
    return this.httpClientComponent.getJSON(path);
  }



}
