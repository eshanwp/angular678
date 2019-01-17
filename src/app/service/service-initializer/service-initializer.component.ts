import {Component, Input, OnInit} from '@angular/core';
import {ServiceComponentService} from '../serviceComponent-service';
import {getMatIconFailedToSanitizeLiteralError} from '@angular/material';
import {Observable} from 'rxjs';

import uuidv1 from 'uuid/v1';

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
  activeNodeUuid: string = null;

  data: Array<Object> = [
    {id: 'DRAG', name: 'DRAG'},
    {id: 'ASSIGN', name: 'ASSIGN'},
    {id: 'FUNCTION', name: 'FUNCTION'},
    {id: 'BRANCH', name: 'BRANCH'},
    {id: 'RETURN', name: 'RETURN'},
    {id: 'DEFAULT', name: 'DEFAULT'}
  ];

  transferAssignData: Object = {id: 0, name: 'ASSIGN'};
  transferFunctionData: Object = {id: 0, name: 'FUNCTION'};
  transferBranchData: Object = {id: 0, name: 'BRANCH'};
  transferReturnData: Object = {id: 0, name: 'RETURN'};
  transferDefaultData: Object = {id: 0, name: 'DEFAULT'};
  receivedData: Array<any> = [];



  ngOnInit() {

  }

  addNewBlock() {
    this.blockTypeName = this.blockType.id;
  }

  onNodeDrag(name: string) {
    debugger;
    this.blockTypeName = name;
  }


  transferDataSuccess($event: any) {
    debugger;
    this.nodeData = null;
    let tempNode = {};
    let tempUuid = uuidv1();
    this.activeNodeUuid = tempUuid;

    tempNode['id'] = $event['dragData']['id'];
    tempNode['name'] = $event['dragData']['name'];
    tempNode['uuid'] = this.activeNodeUuid;

    this.receivedData.push(tempNode);
    this.blockTypeName = $event.dragData.name;
  }


  createAssignNodeDataObject(jsonOutput: any, type: string, symbol: string) {
    debugger;

    let nodeIndex = this.nodeList.findIndex( node => node.uuid === this.activeNodeUuid);

    jsonOutput['type'] = type;
    jsonOutput['symbol'] = symbol;
    jsonOutput['uuid'] = this.activeNodeUuid;

    nodeIndex < 0 ?  this.nodeList.push(jsonOutput) : this.nodeList.splice(nodeIndex, 1, jsonOutput);

    this.blockType = '';
    this.blockTypeName = '';
    this.activeNodeUuid = null;
  }


  submitJson() {
    const jsonToSbmit = {};
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
      if (node['uuid'] === $event.uuid) {

        this.activeNodeUuid = $event.uuid;

        let nodeDataObject = {};
        nodeDataObject['schema'] = node;

        this.nodeData = nodeDataObject;
        this.blockTypeName = node['type'];
      }
    }

  }

  public readJson(jsonSchemaFormPath: string): Promise<any> {
    return this.serviceComponentService.getJsonSchemaForm(jsonSchemaFormPath);

  }

  public readxml(jsonSchemaFormPath: string): Observable<any> {
    return this.serviceComponentService.getXml(jsonSchemaFormPath);

  }


}

