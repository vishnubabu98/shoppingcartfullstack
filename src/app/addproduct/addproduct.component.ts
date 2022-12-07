import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  name=""
  image=""
  category=""
  description=""
  price=""
  constructor(private api:ApiService){
    
  }

  readValues=()=>{
    let data:any=
    {
      "name":this.name,
      "image":this.image,
      "category":this.category,
      "description":this.description,
      "price":this.price
    }
    console.log(data)
    this.api.addProduct(data).subscribe(
      (response)=>{
        console.log(response)
      }
    )
  }

}
