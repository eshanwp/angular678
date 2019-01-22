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

import { FormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import * as $ from 'jquery';
import { ServiceListComponent } from './service/service-list/service-list.component';
import { ServiceInitializerComponent } from './service/service-initializer/service-initializer.component';
import { ServiceAssignBlockComponent } from './service/service-initializer/service-assign-block/service-assign-block.component';
import { ServiceFunctionBlockComponent } from './service/service-initializer/service-function-block/service-function-block.component';
import { HttpClientComponent } from './http-client/http-client.component';
import {ServiceComponentService} from './service/serviceComponent-service';
import { Bootstrap4FrameworkModule } from 'angular7-json-schema-form';
import { DndModule } from 'ng2-dnd';
import { ServiceBranchBlockComponent } from './service/service-initializer/service-branch-block/service-branch-block.component';
import { ServiceReturnBlockComponent } from './service/service-initializer/service-return-block/service-return-block.component';
import { ServiceDefaultBlockComponent } from './service/service-initializer/service-default-block/service-default-block.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ConfigurationInitializerComponent } from './configuration/configuration-initializer/configuration-initializer.component';
import {ConfigurationComponentService} from './configuration/configurationComponentService';
import { ConfigurationFormComponent } from './configuration/configuration-form/configuration-form.component';



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
    ServiceListComponent,
    ServiceInitializerComponent,
    ServiceAssignBlockComponent,
    ServiceFunctionBlockComponent,
    HttpClientComponent,
    ServiceBranchBlockComponent,
    ServiceReturnBlockComponent,
    ServiceDefaultBlockComponent,
    ConfigurationComponent,
    ConfigurationInitializerComponent,
    ConfigurationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    Bootstrap4FrameworkModule,
    DndModule.forRoot()
  ],
  providers: [UserServiceService, ServiceComponentService, HttpClientComponent, ConfigurationComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
