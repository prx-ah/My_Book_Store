import { Component } from '@angular/core';
import { RouterModule, RouterOutlet ,ActivatedRoute} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CatalogProduct} from './catalog-product/catalog-product'


@Component({
  selector: 'app-root',
  standalone: true,
  imports : [
    RouterModule,
    RouterOutlet,
  
   
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-book-shop';
  
}
