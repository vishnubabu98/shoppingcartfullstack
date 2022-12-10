import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {

  constructor(private route: Router,private api:ApiService) { }
  name=""
  phoneno=""
  address=""
  email=""
  password=""
  confirmpassword=""

  readValues=()=>{
    let data:any={
      "name":this.name,
      "phoneno":this.phoneno,
      "address":this.address,
      "email":this.email,
      "password":this.password,
      "confirmpassword":this.confirmpassword
    }
    console.log(data)
    if (this.password == this.confirmpassword) {
      alert("successfully registered")
      this.name=""
      this.phoneno=""
      this.address=""
      this.email=""
      this.password=""
      this.confirmpassword=""
    }
    else {
      alert("passwords are not matching")
      this.password=""
      this.confirmpassword=""
    }
    this.api.addUser(data).subscribe(
      (response:any)=>{
        console.log(response)
      }
    )
  }



    

  }



