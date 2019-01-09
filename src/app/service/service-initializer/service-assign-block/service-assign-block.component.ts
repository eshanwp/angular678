import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceComponentService} from '../../serviceComponent-service';



@Component({
  selector: 'app-service-assign-block',
  templateUrl: './service-assign-block.component.html',
  styleUrls: ['./service-assign-block.component.css']
})
export class ServiceAssignBlockComponent implements OnInit {

  assignBlockForm: FormGroup;
  jsonSchemaForm: any;

  @Output() assignBlockJson = new EventEmitter<any>();
  constructor(
    private formBuilder: FormBuilder,
    private serviceComponentService: ServiceComponentService
  ) { }
  ngOnInit() {

    this.readJson();
    this.assignBlockForm = new FormGroup({
      name: new FormControl(),
      value: new FormControl()
    });
  }

  addBlock() {
    this.assignBlockJson.emit(this.assignBlockForm.value);
  }

  private readJson(): void {
    // console.log('trying to rad json');
    this.serviceComponentService.getJsonSchemaForm('/assign-block.json').then(res => {
      this.jsonSchemaForm = res;
      // console.log('hhhhhh : ' + JSON.stringify(res, null, 2));
    }).catch(error_res => {
      // console.log('hhhhhh aaaa: ' + JSON.stringify(error_res, null, 2));
    });

  }
}
