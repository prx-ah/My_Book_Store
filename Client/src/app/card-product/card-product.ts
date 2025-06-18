import { Component, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card-product',
  standalone:true,
  imports:[ RouterModule ],
  templateUrl: './card-product.html',
  styleUrl: './card-product.css'
})
export class CardProduct {
  @Input() books: any ;
 ngOnInit(){
  console.log("books-->",this.books)
 }
}
