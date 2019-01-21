import {Component, NgModule, OnInit} from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import {ConfigurationComponentService} from './configurationComponentService';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
@NgModule({
  imports: [BrowserAnimationsModule],
})

export class ConfigurationComponent implements OnInit {

  dtOptions: DataTables.Settings = {}
  services: any = null;


  constructor(private configurationComponentService: ConfigurationComponentService) {
  }

  ngOnInit() {
    console.log(111);
    this.loadData();
  }

  loadData() {
    this.configurationComponentService.getAllServices().then(response => {

      this.services = response;
    }).catch(error_response => {
      console.log('error response : ' + JSON.stringify(error_response, null, 2));
    });
  }

  public editService(service: any): void {


  }

}







