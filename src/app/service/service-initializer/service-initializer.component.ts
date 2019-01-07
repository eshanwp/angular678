import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-initializer',
  templateUrl: './service-initializer.component.html',
  styleUrls: ['./service-initializer.component.css']
})
export class ServiceInitializerComponent implements OnInit {

  constructor() { }
  block: any;
  ngOnInit() {
  }

  addNewBlock(block: number) {
    console.log(block);
    this.block = block;
    return this.block;
  }
}
