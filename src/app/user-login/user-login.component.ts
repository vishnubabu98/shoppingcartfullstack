import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email=""
  password=""
  userdata:any =[]
  constructor(private api : ApiService,private route : Router){}

readValues=()=>
{
    let data:any = {"email":this.email,"password":this.password}
    console.log(data)
    this.api.fetchUser(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.length == 0)
        {
         alert("invalid email or password")
        }
        else{
          this.userdata=response
          this.route.navigate(["/viewuser"])
        }
      }
    )
    console.log(this.userdata.email)
  }

}
  
