import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-product-user',
  templateUrl: './view-product-user.component.html',
  styleUrls: ['./view-product-user.component.css']
})
export class ViewProductUserComponent {

  constructor(private api:ApiService){
    this.api.fetchProduct().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
  data:any=[]

}
