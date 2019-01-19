import {Component, Input, OnInit} from '@angular/core';
import {ServiceComponentService} from '../serviceComponent-service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

import uuidv1 from 'uuid/v1';

@Component({
  selector: 'app-service-initializer',
  templateUrl: './service-initializer.component.html',
  styleUrls: ['./service-initializer.component.css']
})
export class ServiceInitializerComponent implements OnInit {

  block: string;
  nodeList = [];
  blockType;
  blockTypeName;
  serviceName: string;
  serviceId: number;
  serviceFlow = [];
  mainServiceArray = [];
  nodeData: any;
  activeNodeUuid: string = null;
  serviceId: number;

  alertType: string;
  notification: any = {active: false, type: null, message: null};

  public responseFlow: Observable<any>;
  servicexxx: any;


  data: Array<Object> = [
    {id: 'DRAG', name: 'DRAG'},
    {id: 'ASSIGN', name: 'ASSIGN'},
    {id: 'FUNCTION', name: 'FUNCTION'},
    {id: 'BRANCH', name: 'BRANCH'},
    {id: 'RETURN', name: 'RETURN'},
    {id: 'DEFAULT', name: 'DEFAULT'}
  ];

  transferAssignData: Object = {id: 0, name: 'ASSIGN', symbol: 'fa fa-stack-overflow', element_css: 'info'};
  transferFunctionData: Object = {id: 0, name: 'FUNCTION', symbol: 'fa fa-cubes', element_css: 'warning'};
  transferBranchData: Object = {id: 0, name: 'BRANCH', symbol: 'fa fa-code-fork', element_css: 'danger'};
  transferReturnData: Object = {id: 0, name: 'RETURN', symbol: 'fa fa-share-square-o', element_css: 'primary'};
  transferDefaultData: Object = {id: 0, name: 'DEFAULT', symbol: 'fa fa-delicious', element_css: 'default'};
  receivedData: Array<any> = [];


  constructor(private serviceComponentService: ServiceComponentService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    debugger;
    this.serviceId = +this.route.snapshot.queryParamMap.get('serviceId');
    if (this.serviceId !== undefined && this.serviceId !== null && !(this.serviceId < 1)) {
      this.getServiceById();
    }
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
    tempNode['symbol'] = $event['dragData']['symbol'];
    tempNode['element_css'] = $event['dragData']['element_css'];
    tempNode['uuid'] = this.activeNodeUuid;

    this.receivedData.push(tempNode);
    this.blockTypeName = $event.dragData.name;
  }


  createAssignNodeDataObject(jsonOutput: any, type: string, symbol: string) {
    debugger;

    let nodeIndex = this.nodeList.findIndex(node => node.uuid === this.activeNodeUuid);

    jsonOutput['type'] = type;
    jsonOutput['symbol'] = symbol;
    jsonOutput['uuid'] = this.activeNodeUuid;

    nodeIndex < 0 ? this.nodeList.push(jsonOutput) : this.nodeList.splice(nodeIndex, 1, jsonOutput);

    this.blockType = '';
    this.blockTypeName = '';
    this.activeNodeUuid = null;
  }


  submitJson() {
    const jsonToSbmit = {};
    if (this.serviceId > 0) {
      jsonToSbmit['id'] = this.serviceId;
    }
    jsonToSbmit['name'] = this.serviceName;
    jsonToSbmit['status'] = 'Active';
    jsonToSbmit['data'] = this.nodeList;
    this.serviceComponentService.createServiceDefiniton(JSON.stringify(jsonToSbmit, null, 2)).then(response => {
      console.log('create resposne : ' + JSON.stringify(response, null, 2));
    }).catch(error => {
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

  public getServiceById() {
    this.serviceComponentService.getServiceById(this.serviceId).then(response => {
      console.log('create resposne  : ' + JSON.stringify(response, null, 2));

      this.servicexxx = response;
      //this.responseFlow = response;


      let dataArray = [];
      this.serviceName = response[0].name;
      this.serviceId = response[0].id;
      dataArray = JSON.parse(response[0].jsonData).data;
      this.receivedData = [];
      for (let i = 0; i < dataArray.length; i++) {
        this.receivedData.push(dataArray[i]);
        this.nodeList.push(dataArray[i]);
      }

    }).catch(error => {
      console.log('create error : ' + JSON.stringify(error, null, 2));
    });
  }



}

