import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ServiceComponentService} from '../serviceComponent-service';

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

@NgModule({
  providers: [ServiceComponentService],
})

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
    private router: Router,
    private serviceComponentService: ServiceComponentService
  ) {  }

  ngOnInit() {
    console.log(111);
    this.loadData();
  }

  loadData() {
    this.serviceComponentService.getAllServices().then(response => {
      this.services = response;
    }).catch( error_response => {
      console.log('error response : ' + JSON.stringify(error_response, null, 2));
    });
  }

  addNewService() {
    this.router.navigate(['service/service-initializer']);
  }

  editService(id: number): void {
    this.router.navigate(['service/service-initializer'], { queryParams: { serviceId: id } });


  }
}
