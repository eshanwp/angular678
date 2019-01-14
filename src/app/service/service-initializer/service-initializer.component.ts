import {Component, Input, OnInit} from '@angular/core';
import {ServiceComponentService} from '../serviceComponent-service';
import {getMatIconFailedToSanitizeLiteralError} from '@angular/material';

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
  nodeData: any;

  data: Array<Object> = [
    {id: 'DRAG', name: 'DRAG'},
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

  onNodeDrag(name: string) {
    debugger;
    this.blockTypeName = name;
  }

  transferAssignData: Object = {id: 0, name: 'ASSIGN'};
  transferFunctionData: Object = {id: 0, name: 'FUNCTION'};
  transferBranchData: Object = {id: 0, name: 'BRANCH'};
  transferReturnData: Object = {id: 0, name: 'RETURN'};
  transferDefaultData: Object = {id: 0, name: 'DEFAULT'};
  receivedData: Array<any> = [];

  transferDataSuccess($event: any) {
    debugger;
    this.receivedData.push($event);

    this.blockTypeName = $event.dragData.id;
    console.log('aaa : ' + $event['id']);
  }




  createAssignNodeDataObject(jsonOutput: any, type: string, symbol: string) {
    jsonOutput['type'] = type;
    jsonOutput['symbol'] = symbol;

    this.nodeList.push(jsonOutput);
    this.blockType = '';
    this.blockTypeName = '';
  }

 /* createFunctionNodeDataObject() {

  }

  createBranchNodeDataObject() {

  }

  createDefaultNodeDataObject() {

  }

  createReturnNodeDataObject() {

  }*/

  submitJson() {
    let jsonToSbmit = {};
    jsonToSbmit['name'] = this.serviceName;
    jsonToSbmit['status'] = 'Active';
    jsonToSbmit['data'] = this.nodeList;
    this.serviceComponentService.createServiceDefiniton(JSON.stringify(jsonToSbmit, null, 2)).then(response => {
      console.log('create resposne : ' + JSON.stringify(response, null, 2));
    }).catch( error => {
      console.log('create error : ' + JSON.stringify(error, null, 2));
    });
  }


  onNodeClick($event) {
    debugger;
    console.log('clicked node');
    for (let i = 0; i < this.nodeList.length; i++) {
      let node = this.nodeList[i];
      if (node['id'] === $event) {
        this.nodeData = node;
        this.blockTypeName = node['type'];
      }
    }

  }



  public readJson(jsonSchemaFormPath: string): Promise<any> {
    return this.serviceComponentService.getJsonSchemaForm(jsonSchemaFormPath);

  }


}

