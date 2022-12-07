import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SearchProductComponent } from './search-product/search-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserLoginComponent,
    UserRegComponent,
    AddproductComponent,
    SearchProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
