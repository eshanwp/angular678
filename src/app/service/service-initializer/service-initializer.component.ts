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
  mainJson = {};
  exampleJsonObject: any;
  jsonFormSchema: string;
  ngOnInit() {

  }

  addNewBlock(block: number) {
    this.block = block;
    return this.block;
  }

  getAssignBlockJson(jsonOutput: any) {
    console.log(this.blockId);
    this.mainJson[this.blockId] = jsonOutput;
    console.log(this.mainJson);
  }


}
