import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiceInitializerComponent} from '../service-initializer.component';

@Component({
  selector: 'app-service-branch-block',
  templateUrl: './service-branch-block.component.html',
  styleUrls: ['./service-branch-block.component.css']
})
export class ServiceBranchBlockComponent implements OnInit {

  @Output() branchBlockJson = new EventEmitter<any>();
  @Input() schemaData: any;
  jsonSchemaForm;
  constructor(
    private serviceInitializerComponent: ServiceInitializerComponent
  ) { }
  ngOnInit() {

    this.serviceInitializerComponent.readJson('/branch-block.json').then(res => {
      this.jsonSchemaForm = res;
    }).catch(error => {
    });
  }

  addToFlow($event) {
    this.branchBlockJson.emit($event.schema);
  }

}
