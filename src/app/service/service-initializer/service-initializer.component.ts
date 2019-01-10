import {Component, Input, OnInit} from '@angular/core';
import {ServiceComponentService} from '../serviceComponent-service';

@Component({
  selector: 'app-service-initializer',
  templateUrl: './service-initializer.component.html',
  styleUrls: ['./service-initializer.component.css']
})
export class ServiceInitializerComponent implements OnInit {
  constructor(
    private serviceComponentService: ServiceComponentService
  ) { }
  block: string;
  nodeList = [];
  blockType;
  blockTypeName;
  serviceName: any;
  serviceFlow = [];
  mainServiceArray = [];

  data: Array<Object> = [
    {id: 'ASSIGN', name: 'ASSIGN'},
    {id: 'FUNCTION', name: 'FUNCTION'},
    {id: 'BRANCH', name: 'BRANCH'},
    {id: 'RETURN', name: 'RETURN'},
    {id: 'DEFAULT', name: 'DEFAULT'}
  ];

  ngOnInit() {

  }

  addNewBlock() {
    this.blockTypeName = this.blockType.id;
  }

  getBlockJson(jsonOutput: any, blockType: string, styleClass: string) {
    // console.log(jsonOutput);
    this.serviceFlow['id'] = jsonOutput['id'];
    this.serviceFlow['nextNode'] = jsonOutput['next-node'];
    this.serviceFlow['type'] = blockType;
    this.serviceFlow['styleClass'] = styleClass;
    this.serviceFlow['description'] = blockType + ' BLOCK';

    this.blockType = '';
    this.blockTypeName = '';
    jsonOutput['type'] = blockType;
    this.nodeList.push(this.serviceFlow);
    this.mainServiceArray.push(jsonOutput);
    console.log(this.mainServiceArray);
  }

  public readJson(jsonSchemaFormPath: string): Promise<any> {
    return this.serviceComponentService.getJsonSchemaForm(jsonSchemaFormPath);

  }


}

