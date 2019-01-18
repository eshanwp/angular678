import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiceInitializerComponent} from '../service-initializer.component';

@Component({
  selector: 'app-service-default-block',
  templateUrl: './service-default-block.component.html',
  styleUrls: ['./service-default-block.component.css']
})
export class ServiceDefaultBlockComponent implements OnInit {

  @Output() defaultBlockJson = new EventEmitter<any>();
  @Input() schemaData: any;
  jsonSchemaForm;
  constructor(
    private serviceInitializerComponent: ServiceInitializerComponent
  ) { }
  ngOnInit() {

    this.serviceInitializerComponent.readJson('/default-block.json').then(res => {
      this.jsonSchemaForm = res;
    }).catch(error => {
    });
  }

  addToFlow($event) {
    this.defaultBlockJson.emit($event.schema);
  }

}
