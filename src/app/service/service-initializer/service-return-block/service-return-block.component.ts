import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiceInitializerComponent} from '../service-initializer.component';

@Component({
  selector: 'app-service-return-block',
  templateUrl: './service-return-block.component.html',
  styleUrls: ['./service-return-block.component.css']
})
export class ServiceReturnBlockComponent implements OnInit {

  @Output() returnBlockJson = new EventEmitter<any>();
  @Input() schemaData: any;
  jsonSchemaForm;
  constructor(
    private serviceInitializerComponent: ServiceInitializerComponent
  ) { }
  ngOnInit() {

    this.serviceInitializerComponent.readJson('/return-block.json').then(res => {
      this.jsonSchemaForm = res;
    }).catch(error => {
    });
  }

  addToFlow($event) {
    this.returnBlockJson.emit($event.schema);
  }

}
