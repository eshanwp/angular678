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
    return this.httpClientComponent.httpPost('/api/config/save-configuration', payload);
  }

  public getAllServices(): Promise<any> {
    return this.httpClientComponent.httpGet('/api/config/all-configuration');
  }

  public getServiceyIdWithInfor(serviceId: number, includeDetails: boolean): Promise<any> {
    return this.httpClientComponent.httpGet('/api/config/get-configuration?serviceId=' + serviceId + '&includeDetails=' + includeDetails);
  }
  /*
    public getServiceById(id: number): Promise<any> {
      return this.httpClientComponent.httpGet('/service?id=' + id);
    }*/

  public getJsonSchemaForm (path: string): Promise<any> {
    return this.httpClientComponent.getJSON(path);
  }

  /**
   * @Des find all cx_response
   **/
  findAllCxResponse(): Promise<any> {
    return this.httpClientComponent.httpGet('/api/cx-response');
  }


}
