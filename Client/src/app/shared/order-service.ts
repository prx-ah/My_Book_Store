import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../../environments/environment'
import { OrderDetail } from './order-detail.model';
import { NgForm } from '@angular/forms';
import { ObjectId } from 'bson'
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url: string = environment.apiBaseUrl + '/OrderUser' 
  list: OrderDetail[] = [];

  formData: OrderDetail = new OrderDetail()
  formSubmitted: boolean = false;
  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.url)
      .subscribe({
        next: res => {
         
          this.list = res as OrderDetail[]
          console.log("here is my list -->",this.list) 
          
        },
        error: err => { console.log(err) }
      })

      return    this.http.get(this.url); }

  postPaymentDetail(formdata : OrderDetail) {
    return this.http.post(this.url, formdata)
  }

  putPaymentDetail() {
    return this.http.put(this.url + '/' + this.formData.orderNumber, this.formData)
  }


  deletePaymentDetail(id: string ) {
    
    
    return this.http.delete(this.url + '/' + id)
  }


  resetForm(form: NgForm) {
    form.form.reset()
    this.formData = new OrderDetail()
    this.formSubmitted = false
  }


 
}