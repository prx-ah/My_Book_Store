import { Component } from '@angular/core';
import {CardProduct} from '../card-product/card-product';

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
  imports: [CardProduct]
})



export class CatalogProduct {

   book!: Book;
   listBook :any ;
   storeList:any ;

filteredLocationList: Book[] = [];



 ngOnInit(){
  
  this.listBook = [];
  this.storeList =[
    {storeName: "Peter's store"} ,
    {storeName: "Geter's store"}
  ]


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

   

    var  gretaBook  =  [
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


var peterBook = [
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

  gretaBook.forEach(element => {
     var book ={
      id:element.id,
   author:  element.author,
   name : element.name,
   price : element.price,
   store: "Greter" 
     }

    this.listBook.push(book)
  });

  peterBook.forEach(element => {
     var book ={
      id:element.id,
   author:  element.author,
   name : element.name,
   price : element.price,
   store: "Peter" 
     }

    this.listBook.push(book)
  });

this.filteredLocationList = this.listBook ;



  
 }



 filreGreter() {

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
