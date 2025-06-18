import { Component } from '@angular/core';
// import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { FormBuilder, NgForm, NgModel } from "@angular/forms";
// import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

import { OrderService } from '../shared/order-service';
import { OrderDetail } from '../shared/order-detail.model';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  imports: [ReactiveFormsModule],
  templateUrl:  './order-detail-form.html',
  styleUrl: './order-detail-form.css'
})
export class OrderDetailForm {

  orderForm: any ;

 
constructor(public  service :  OrderService ,public route : ActivatedRoute , public fb :FormBuilder ,private router: Router ) {
  }

  ngOnInit(){
    // Get NavigationStart events
 
    this.route.data.subscribe({
        next : (data:any) => {
         console.log(data.data)
         var book = data.data.extra
            this.createFrom(book);
        //  this.profileForm.value.titleOfBook =book.titleOfBook || " " ;
        //  this.profileForm.value.price = book.price ;
        //  this.profileForm.value.store =book.store ;

         console.log(this.orderForm.value)
      },
      error: (error) => {
        console.error('Error in getMasterData:', error);
      }
    });
  }


  createFrom(book :any){
    var ordernum = this.generateOrderNum();
    this.orderForm = this.fb.group({
    orderNumber: [ordernum],
    titleOfBook: [book.titleOfBook],
    price:  [book.price],
    store:[book.store],
    totalPaid :[book.price+book.price*0.07]

        
      });


  

  }

  onSubmit() {
    this.service.formSubmitted = true
   console.log(this.orderForm.value) ;
   
   this.insertRecord(this.orderForm.value);
 
 
  }

  generateOrderNum():string{
    let min = 0;
   let max = 99999;
   let orderNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return orderNum.toString();
  }

  insertRecord(form: any) {
   
     var src  = this.orderForm.value;
       var data = new OrderDetail(       
       ) ;
        data.orderNumber = this.generateOrderNum() || "" ;   
        data.titleOfBook =src.titleOfBook || "" ; 
        data.price = src.price || 0 ;
        data.store = src.store || "",
        data.totalPaid = src.totalPaid || 0;  
        console.log("to save data --->",data)
        this.service.postPaymentDetail(data)
      .subscribe({
        next: res => {
          this.service.list = res as OrderDetail[]
        },
        error: err => { console.log(err) }
      })
  }
  updateRecord(form: any) {
    this.service.putPaymentDetail()
      .subscribe({
        next: res => {
          this.service.list = res as OrderDetail[]
          this.service.resetForm(form)
        },
        error: err => { console.log(err) }
      })
   }

   navigateToListOrder() {
    this.router.navigate(['/order/list'], {
        state: { code: undefined }
      });
}

}
