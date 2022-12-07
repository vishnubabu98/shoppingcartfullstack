import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
 
  const myRoute:Routes=[
    {
      path:"",
      component:AdminloginComponent
    },
    {
      path:"userlogin",
      component:UserLoginComponent
    },
    {
      path:"userreg",
      component:UserRegComponent
    },
    {
      path:"add",
      component:AddproductComponent
    },
    {
      path:"search",
      component:SearchProductComponent
    }
  ]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserLoginComponent,
    UserRegComponent,
    AddproductComponent,
    SearchProductComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
