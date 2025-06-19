import { Component ,NgModule,OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { OrderService } from '../shared/order-service';
import { OrderDetail } from '../shared/order-detail.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.html',
  imports:[CommonModule,],
  standalone: true,
  providers:[OrderService],
  styleUrl: './order-list.css'
})
export class OrderList  implements OnInit {

 constructor(
       public sv :OrderService,
       private http: HttpClient,
       public route : ActivatedRoute 

     ){
   
     }
  url: string = environment.apiBaseUrl + '/OrderUsrs'
  list: OrderDetail[] = [];
  formData: OrderDetail = new OrderDetail()
  formSubmitted: boolean = false;
  listOrder :any
  test :any

  ngOnInit()  {
    console.log("start")

     this.route.data.subscribe({
        next : (data:any) => {
         console.log(data.data)
         const order = data.data ;
         this.list = order
         
         
      },
      error: (error) => {
        console.error('Error in getMasterData:', error);
      }
    });
   
    console.log("here data from service",this.sv.list)
  }



  onDelete(id: any) {
    if (confirm('Are you sure to delete this record?'))
      this.sv.deletePaymentDetail(id)
        .subscribe({
          next: res => {
            console.log("hey",res);
             location.reload();
          
            
          },
          error: err => { console.error(err) 
             location.reload();
          }
        });
         
  }

}
