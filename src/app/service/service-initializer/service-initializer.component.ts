import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-initializer',
  templateUrl: './service-initializer.component.html',
  styleUrls: ['./service-initializer.component.css']
})
export class ServiceInitializerComponent implements OnInit {
  constructor() { }
  block: any;
  blockId: number;
  nodeList = [];
  blockType: string;
  exampleJsonObject: any;
  jsonFormSchema: string;


  ngOnInit() {

  }

  addNewBlock(block: number) {
    this.block = block;
    return this.block;
  }

  getAssignBlockJson(jsonOutput: any) {
    debugger;
    jsonOutput['blockId'] = this.blockId;
    jsonOutput['nextBlockId'] = this.blockId;
    jsonOutput['blockType'] = 'ASSIGN';
    jsonOutput['styleClass'] = 'fa fa-terminal';
    jsonOutput['description'] = 'This is an assign block';

    this.blockType = '0';
    this.blockId = 0;
    console.log(this.blockId);
    this.nodeList.push(jsonOutput);
    console.log(this.nodeList);
  }


}
