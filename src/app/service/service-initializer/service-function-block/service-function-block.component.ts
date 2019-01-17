import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiceInitializerComponent} from '../service-initializer.component';

@Component({
  selector: 'app-service-function-block',
  templateUrl: './service-function-block.component.html',
  styleUrls: ['./service-function-block.component.css']
})
export class ServiceFunctionBlockComponent implements OnInit {

  @Output() functionBlockJson = new EventEmitter<any>();
  @Input() schemaData: any;
  jsonSchemaForm;
  convert: any;
  className: any;

  constructor(
    private serviceInitializerComponent: ServiceInitializerComponent
  ) { }

  ngOnInit() {
    this.serviceInitializerComponent.readJson('/function-block.json').then(res => {
      this.jsonSchemaForm = res;
      // console.log(this.jsonSchemaForm.schema.properties['class'].enum);
    }).catch(error => {
      console.log('functions bloc json getting error : ' + JSON.stringify(error, null, 2));
    });

    // // Read class_name.json file
    // this.serviceInitializerComponent.readJson('/class_name.json').then(res => {
    //   this.dataObject = res;
    //   // console.log(this.jsonSchemaForm.schema.properties['class'].enum);
    //   this.jsonSchemaForm.schema.properties['class'].enum = this.dataObject.enum;
    //
    // }).catch(error => {
    //   console.log('functions bloc json getting error : ' + JSON.stringify(error, null, 2));
    // });

  }

  addToFlow($event) {
     this.functionBlockJson.emit($event.schema);
  }

  getClass($event) {
    this.className = $event.schema === undefined ? 'empty class' : $event.schema['class'];
  }


}
