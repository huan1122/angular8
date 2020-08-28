import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import {FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MessagesComponent } from './messages/messages.component';
import {MessagesService} from './messages.service';
import {ProductService} from './product.service';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { PanelLeftComponent } from './panel-left/panel-left.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {DpDatePickerModule } from 'ng2-date-picker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductComponent,
    ProductDetailComponent,
    MessagesComponent,
    ProductEditComponent,
    PanelLeftComponent,
    OrderListComponent,
    OrderEditComponent,
    CustomerListComponent,
    CustomerEditComponent,
    LoginComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbModalModule,
    HttpClientModule,
    DpDatePickerModule,
    BrowserAnimationsModule 
  ],
  providers: [
    MessagesService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
