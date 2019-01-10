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
  constructor(
    private serviceInitializerComponent: ServiceInitializerComponent
  ) { }

  ngOnInit() {
    this.serviceInitializerComponent.readJson('/service_function_list.xml').then(res => {
      debugger;
      this.jsonSchemaForm = res;
    }).catch(error => {
    });
  }

  addToFlow($event) {
    this.functionBlockJson.emit($event.schema);
  }

}
