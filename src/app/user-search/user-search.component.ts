import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {

 name=""
 constructor(private api:ApiService){}
 searchData:any=[]

  readValues=()=>{
    let data:any={
      "name":this.name

    }
    this.api.searchProduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length == 0) {
          alert("invalid name")
          
        } else {
          this.searchData=response
          
        }
      }
    )
  }

}
