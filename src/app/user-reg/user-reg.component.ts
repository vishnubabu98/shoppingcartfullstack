import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {

  constructor(private route: Router) { }
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
  }

    

  }



