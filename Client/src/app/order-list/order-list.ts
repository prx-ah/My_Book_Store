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
export class OrderList  {

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
    // this.list = [{"orderNumber":"001","titleOfBook":"Harry potter","price":200,"store":"peter","totalPaid":200}]
    // console.log(this.list);
    // this.sv.refreshList().subscribe((res:any)=>{
    //   console.log("res-->",res);
    //   this.list = res
    // }).

     this.route.data.subscribe({
        next : (data:any) => {
         console.log(data.data)
         const order = data.data ;
         this.list = order
         
        //  this.profileForm.value.titleOfBook =book.titleOfBook || " " ;
        //  this.profileForm.value.price = book.price ;
        //  this.profileForm.value.store =book.store ;

         
      },
      error: (error) => {
        console.error('Error in getMasterData:', error);
      }
    });
   
    console.log("here data from service",this.sv.list)
  }

     refreshList() {
    this.http.get(this.url)
      .subscribe({
        next: res => {
         
          this.list = res as OrderDetail[]
          console.log("here is my list -->",this.list) 
          
        },
        error: err => { console.log(err) }
      })
  }

  postPaymentDetail() {
    return this.http.post(this.url, this.formData)
  }

  putPaymentDetail() {
    return this.http.put(this.url + '/' + this.formData.orderNumber, this.formData)
  }


  deletePaymentDetail(id: any) {
    return this.http.delete(this.url + '/' + id)
  }


  resetForm(form: NgForm) {
    form.form.reset()
    this.formData = new OrderDetail()
    this.formSubmitted = false
  }
  refesh(){
    location.reload();
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
