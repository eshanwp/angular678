import {Component, NgModule, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfigurationComponentService} from '../configurationComponentService';

@NgModule({
  providers: [ConfigurationComponentService],
})

@Component({
  selector: 'app-configuration-initializer',
  templateUrl: './configuration-initializer.component.html',
  styleUrls: ['./configuration-initializer.component.css']
})
export class ConfigurationInitializerComponent implements OnInit {


  public myForm: FormGroup;
  public listForm: FormGroup;
  public apiList: Array<any> = [{'id': 1, 'name': 'name1'}, {'id': 2, 'name': 'name2'}];

  constructor(private _fb: FormBuilder, private configurationComponentService: ConfigurationComponentService) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      serviceName: ['', [Validators.required, Validators.minLength(5)]],
      description: [''],
      actionFormDtos: this._fb.array([
        this.initActions(),
      ])
    });

    this.listForm = this._fb.group({
      apiIdList: [this.apiList]
    });
  }


  initActions() {
    return this._fb.group({
      actionDesc: ['', Validators.required],
      apiId: [''],
      keyWordFromDtos: this._fb.array([
        this.initTempArrs(),
      ])
    });
  }

  initTempArrs() {
    return this._fb.group({
      firstKey: [''],
      regEx: [''],
      fullMatch: [0],
      ignoreCase: [0]
    });
  }

  addActionFormDtos() {
    debugger;
    const control = <FormArray>this.myForm.controls['actionFormDtos'];
    control.push(this.initActions());
  }

  removeActionFormDtos(i: number) {
    const control = <FormArray>this.myForm.controls['actionFormDtos'];
    control.removeAt(i);
  }

  addVariable() {
    debugger;

    const control = <FormArray>this.myForm.controls['actionFormDtos'];
    const contro2 = <FormGroup>control.controls[0];
    const contro3 = <FormArray>contro2.controls.keyWordFromDtos;
    contro3.push(this.initTempArrs());
  }

  removeKeySet(i: number) {
    const control = <FormArray>this.myForm.controls['actionFormDtos'];
    const contro2 = <FormGroup>control.controls[0];
    const contro3 = <FormArray>contro2.controls.keyWordFromDtos;
    contro3.removeAt(i);
  }



  save(model: Customer) {
    debugger;
    this.configurationComponentService.createServiceDefiniton(model['value']).then( response => {
      console.log("response ok");
    }).catch(error_response => {
      console.log("response fail");
    });
    // call API to save
    // ...
    console.log(model);
  }

  saveCheck(model: any) {

  }

  addKeys(address:any) {
    debugger;
  }

}

export interface Customer {
  name: string;
  addresses: Address[];
}

export interface Address {
  actionDesc: string;
  apiId: string;
  keyWordFromDtos: TempArr[];
}

export interface TempArr {
  firstKey: string;
  regEx: string;
  fullMatch: string;
  ignoreCase: string;
}

