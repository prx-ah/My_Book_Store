import { Component, OnInit } from '@angular/core';
import {CardProduct} from '../card-product/card-product';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';


interface Book {
   id: 0;
   author: "";
   name :"";
   price : 0;
   store: "" ;
}



@Component({
  selector: 'app-catalog-product',
  standalone:true,
  templateUrl: './catalog-product.html',
  styleUrl: './catalog-product.css',
  imports: [CardProduct,CommonModule],
  providers:[
    DatePipe
  ]
})



export class CatalogProduct implements OnInit {

   book!: Book;
   listBook :any[] = [] ;
   peterBook:any  ;
   gretaBook:any ;
   storeList:any ;
   filteredLocationList: Book[] = [];

 constructor(
  public http :HttpClient,
  public route : ActivatedRoute,
  public datepipe: DatePipe
 ){

 }

 ngOnInit(){
  
   this.storeList =[
    {storeName: "Peter's store"} ,
    {storeName: "Geter's store"}
    ]

  this.getBook()
  this.prepareData();

  console.log(this.listBook);

}

filterResults(text: string) {
  console.log(text);
  if (!text) {
    this.filteredLocationList = this.listBook;
    return;
  }

  this.filteredLocationList = this.listBook.filter(
     (item:any) => item?.name.includes(text)
  );
  console.log(this.filteredLocationList);

}


  prepareData(){

 



  this.gretaBook.forEach( (element:any) => {
     var book ={
      id:element.id,
      author:  element.author,
      name : element.name,
      date : this.datepipe.transform(element.date, 'dd-MM-yyyy'),
      price : element.price,
      store: "Greter" 
     }

    this.listBook.push(book)
  });

  this.peterBook.forEach((element:any) => {
     var book ={
      id:element.id,
      author:  element.author,
      name : element.title,
      price : element.price,
      date : this.datepipe.transform(element.date, 'dd-MM-yyyy'),
      store: "Peter" 
     }

    this.listBook.push(book)
  });

this.filteredLocationList = this.listBook ;



  
 }
getBook() {
  this.route.data.subscribe({
    next: (data: any) => {
      console.log("in catalog data", data);

      if (data) {
         
        this.gretaBook = data?.data?.listBookGreta || [];
        this.peterBook = data?.data?.listBookPeter || [];

         
        if (this.gretaBook.length) {
          console.log("Data in listBookGreta", this.gretaBook);
        } else {

          console.log("No data in listBookGreta");
           this.gretaBook =  [
  {
    "id": "1",
    "name": "The Nature of Software Development: Keep It Simple, Make It Valuable, Build It Piece by Piece",
    "author": "Ron Jeffries",
    "date": "2024-03-06T09:56:50.587Z",
    "price": 200
  },
  {
    "id": "2",
    "name": "Modern Software Engineering: Doing What Works to Build Better Software Faster",
    "author": "David Farley, Amy Gordon, et al.",
    "date": "2024-03-05T09:56:50.587Z",
    "price": 100
  },
  {
    "id": "3",
    "name": "Software Engineering for Absolute Beginners: Your Guide to Creating Software Products",
    "author": "Nico Loubser",
    "date": "2024-03-07T09:56:50.587Z",
    "price": 300
  },
  {
    "id": "4",
    "name": "Code: The Hidden Language of Computer Hardware and Software",
    "author": "Charles Petzold",
    "date": "2024-03-04T09:56:50.587Z",
    "price": 150
  },
  {
    "id": "5",
    "name": "Software Development Pearls: Lessons from Fifty Years of Software Experience",
    "author": "Karl Wiegers, Amy Gordon, et al.",
    "date": "2024-03-04T08:56:50.587Z",
    "price": 200
  }
]

        }

        if (this.peterBook.length) {
          console.log("Data in listBookPeter", this.peterBook);
        } else {
          console.log("No data in listBookPeter");
           this.peterBook = [
  {
    "id": "1",
    "title": "Fluent Python: Clear, Concise, and Effective Programming",
    "author": "Luciano Ramalho",
    "publishedOn": "2024-03-06T09:57:50.587Z",
    "price": 100
  },
  {
    "id": "2",
    "title": "The Manager's Path: A Guide for Tech Leaders Navigating Growth and Change",
    "author": "Camille Fournier",
    "date": "2024-03-08T09:56:50.587Z",
    "price": 150
  },
  {
    "id": "3",
    "title": "Software Engineering for Absolute Beginners: Your Guide to Creating Software Products",
    "author": "Nico Loubser",
    "date": "2024-03-07T09:56:50.587Z",
    "price": 200
  },
  {
    "id": "4",
    "title": "The Staff Engineer's Path: A Guide for Individual Contributors Navigating Growth and Change",
    "author": "Tanya Reilly",
    "date": "2024-03-03T09:56:50.587Z",
    "price": 150
  },
  {
    "id": "5",
    "title": "Cracking the PM Interview: How to Land a Product Manager Job in Technology (Cracking the Interview & Career)",
    "author": "Gayle Laakmann McDowell",
    "date": "2024-03-02T08:56:50.587Z",
    "price": 180
  }
]
        }
      }
    },
    error: (error) => {
      console.error('Error in getMasterData:', error);
    }
  });
}

 filterGreter() {

   this.filteredLocationList = this.listBook.filter(
     (item:any) => item?.store.includes("Greter")
  );
  console.log(this.filteredLocationList);
 }
 
filterPeter() {

  this.filteredLocationList = this.listBook.filter(
     (item:any) => item?.store.includes("Peter")
  );
  console.log(this.filteredLocationList);
}


}
