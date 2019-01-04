import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

declare var $: any;
import Swal from 'sweetalert2';

class User {
  id: number;
  name: string;
  email: string;
  userName: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todaydate;

  dtOptions: DataTables.Settings = {};
  users: User[];

  constructor(
    private userService: UserServiceService,
    private http: HttpClient,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.todaydate = this.userService.showTodayDate();
    this.loadData();
  }

  loadData() {
    const that = this;
    this.dtOptions = {
      responsive: true,
      pagingType: 'full_numbers',
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            'http://localhost:8082/api/users',
            dataTablesParameters, {}
          ).subscribe(resp => {
          that.users = resp.data;

          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: []
          });

        });
      },
      columns: [
        {
          data: 'name',
          name: 'name',
          'searchable': true,
          'orderable': true,
        }, {
          data: 'email',
          name: 'email',
          'searchable': true,
          'orderable': true,
        }, {
          data: 'userName',
          name: 'userName',
          'searchable': true,
          'orderable': true,
        }, {
          data: 'id',
          name: 'id',
          'searchable': true,
          'orderable': true,
        }
      ]
    };
  }

  // getAllUsers() {
  //   this.users = [];
  //   this.userService.getAllUsers().subscribe((data) => {
  //     this.users = data;
  //   });
  // }

  showUser(id) {
      localStorage.clear();
      window.localStorage.setItem('userId', id);
      this.router.navigate(['user/form']);
  }

  addUser(): void {
    localStorage.clear();
    this.router.navigate(['user/form']);
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId).subscribe((data) => {
      this.loadData();
      Swal({
        type: 'success',
        title: 'User has been successfully deleted',
        showConfirmButton: false,
        timer: 2000
      });
    }, (err) => {
      console.log(err);
    });
  }

  cancelPopup () {
    Swal({
      type: 'info',
      title: 'Your response has been safe',
      showConfirmButton: false,
      timer: 1500
    });
  }

}
