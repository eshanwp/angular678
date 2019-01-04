import {Component, Input, OnInit} from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

class User {
  id: number;
  name: string;
  email: string;
  userName: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  users: User[];

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private userService: UserServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    const userId = window.localStorage.getItem('userId');

    this.registerForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.getUser(userId);
  }


  getUser(userId) {
    this.userService.getUser(userId).subscribe((data) => {
      console.log(data);
      this.registerForm.setValue(data);
      this.users = data;
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  addUser() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));

    this.userService.addUser(this.registerForm.value).subscribe((result) => {
      this.router.navigate(['user/list']);
      console.log('User has been successfully saved');
    }, (err) => {
      console.log(err);
    });
  }

  updateUser() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.userService.updateUser(this.registerForm.value).subscribe((result) => {
      this.router.navigate(['user/list']);
      console.log('User has been successfully updated');
    }, (err) => {
      console.log(err);
    });
  }

}
