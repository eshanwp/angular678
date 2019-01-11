import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServiceInitializerComponent} from '../service-initializer.component';

@Component({
  selector: 'app-service-function-block',
  templateUrl: './service-function-block.component.html',
  styleUrls: ['./service-function-block.component.css']
})
export class ServiceFunctionBlockComponent implements OnInit {

  @Output() functionBlockJson = new EventEmitter<any>();
  jsonSchemaForm;
  dataObject: any;
  constructor(
    private serviceInitializerComponent: ServiceInitializerComponent
  ) { }

  ngOnInit() {
    this.serviceInitializerComponent.readJson('/function-block.json').then(res => {
      this.jsonSchemaForm = res;
    }).catch(error => {
      console.log('functions bloc json getting error : ' + JSON.stringify(error, null, 2));
    });
  }

  addToFlow($event) {
     this.functionBlockJson.emit($event.schema);
    // this.functionBlockJson.emit(this.dataObject);
  }

}
