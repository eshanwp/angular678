import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
declare var $: any;

class Serive {
  id: number;
  name: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  services: Serive[];
  constructor(
    private http: HttpClient,
    private router: Router
  ) {  }

  ngOnInit() {
  }

  loadData() {
    const that = this;
    this.dtOptions = {
      responsive: true,
      pagingType: 'full_numbers',
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            'http://localhost:8080/api/services',
            dataTablesParameters, {}
          ).subscribe(resp => {
          that.services = resp.data;

          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: []
          });

        });
      },
      columns: [
        {
          data: 'name',
          name: 'name',
          'searchable': true,
          'orderable': true,
        }, {
          data: 'id',
          name: 'id',
          'searchable': true,
          'orderable': true,
        }
      ]
    };
  }

  addNewService() {
    this.router.navigate(['service/service-initializer']);
  }
}
