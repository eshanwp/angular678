import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-service-assign-block',
  templateUrl: './service-assign-block.component.html',
  styleUrls: ['./service-assign-block.component.css']
})
export class ServiceAssignBlockComponent implements OnInit {

  assignBlockForm: FormGroup;

  @Output() assignBlockJson = new EventEmitter<any>();
  exampleJsonObject: any;
  constructor(
    private formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    this.assignBlockForm = new FormGroup({
      name: new FormControl(),
      value: new FormControl()
    });
  }

  addBlock() {
    this.assignBlockJson.emit(this.assignBlockForm.value);
  }
}
