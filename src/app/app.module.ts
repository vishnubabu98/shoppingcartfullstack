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
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { FormsModule } from '@angular/forms';
 
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
    },
    {
      path:"view",
      component:ViewproductComponent
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
    NavbarComponent,
    ViewproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
