import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginLayoutComponent } from './_layout/app/login/login-layout/login-layout.component';
import { MainLayoutComponent } from './_layout/app/main/main-layout/main-layout.component';
import { HeaderComponent } from './_layout/app/main/header/header.component';
import { FooterComponent } from './_layout/app/main/footer/footer.component';
import { BreadcrumbComponent } from './_layout/app/main/breadcrumb/breadcrumb.component';
import { LeftNavigationComponent } from './_layout/app/main/left-navigation/left-navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './user/list/list.component';
import { FormComponent } from './user/form/form.component';

import { UserServiceService } from './user/user-service.service';

import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import * as $ from 'jquery';


@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    LeftNavigationComponent,
    DashboardComponent,
    ListComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
