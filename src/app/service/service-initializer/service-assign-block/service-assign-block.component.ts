import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServiceInitializerComponent} from '../service-initializer.component';


@Component({
  selector: 'app-service-assign-block',
  templateUrl: './service-assign-block.component.html',
  styleUrls: ['./service-assign-block.component.css']
})
export class ServiceAssignBlockComponent implements OnInit {

  @Output() assignBlockJson = new EventEmitter<any>();
  jsonSchemaForm;
  constructor(
    private serviceInitializerComponent: ServiceInitializerComponent
  ) { }
  ngOnInit() {

    this.serviceInitializerComponent.readJson('/assign-block.json').then(res => {
      this.jsonSchemaForm = res;
    }).catch(error => {
    });
  }

  addToFlow($event) {
    this.assignBlockJson.emit($event.schema);
  }

}
