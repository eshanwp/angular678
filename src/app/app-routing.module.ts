import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginLayoutComponent} from './_layout/app/login/login-layout/login-layout.component';
import {MainLayoutComponent} from './_layout/app/main/main-layout/main-layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';

// User
import { ListComponent } from './user/list/list.component';
import { FormComponent } from './user/form/form.component';

const routes: Routes = [

  // App routes goes here here
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'user/list', component: ListComponent},
      {path: 'user/form', component: FormComponent},

    ]
  },

  // Login routes
  {path: 'login', component: LoginLayoutComponent},


  // otherwise redirect to home
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule {
}
