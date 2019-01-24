import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ConfigurationComponentService} from '../../configurationComponentService';

declare var $: any;

class CxResponse {
  id: number;
  resCode: number;
  resDesc: string;
  sms: string;
  sourcePort: string;
  sendToOriginatedNo: number;
  sendToNotifyNo: number;
  scapi_id: number;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-configuration-cx-response',
  templateUrl: './configuration-cx-response.component.html',
  styleUrls: ['./configuration-cx-response.component.css']
})
export class ConfigurationCxResponseComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  cxResponses: CxResponse[];
  constructor(
    private http: HttpClient,
    private router: Router,
    private configurationComponentService: ConfigurationComponentService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.configurationComponentService.findAllCxResponse().then(response => {
      this.cxResponses = response;
    }).catch( error_response => {
      console.log('error response : ' + JSON.stringify(error_response, null, 2));
    });
  }

  addNewResponse() {
    this.router.navigate(['service/service-initializer']);
  }
}
