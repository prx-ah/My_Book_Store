import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
// import 'zone.js'

@Component({
  selector: 'app-card-product',
  standalone:true,
  imports:[ RouterModule ],
  templateUrl: './card-product.html',
  styleUrl: './card-product.css'
})
export class CardProduct implements OnInit{

  @Input() books: any ;
 ngOnInit(){
  console.log("books-->",this.books)
 }
}
