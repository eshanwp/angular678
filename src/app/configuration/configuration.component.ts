import {Component, NgModule, OnInit} from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import {ConfigurationComponentService} from './configurationComponentService';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'ngx-accordion';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
@NgModule({
    imports: [BrowserAnimationsModule, AccordionModule],})

export class ConfigurationComponent implements OnInit {


  acc = document.getElementsByClassName('accordion');
  //i: number;

  public call() {
    for (let i = 0; i < this.acc.length; i++) {
      this.acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }
  }

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {

  }


}


