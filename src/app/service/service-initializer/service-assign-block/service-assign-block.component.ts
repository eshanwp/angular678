import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-service-assign-block',
  templateUrl: './service-assign-block.component.html',
  styleUrls: ['./service-assign-block.component.css']
})
export class ServiceAssignBlockComponent implements OnInit {

  assignBlockForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }
  ngOnInit() {
  }

  onSubmit() {
    // console.log(this.assignBlockForm.value);
  }
}
