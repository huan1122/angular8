import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path :'',component:LoginComponent},
  {path :'product',component:ProductComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path:'detail/:id',component:ProductDetailComponent},
  {path:'d',component:ProductEditComponent},
  {path:'home',component:AppComponent},
  {path: 'userEdit',component:UserEditComponent},
  {path: 'userList',component:UserListComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
