import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { FlexboxProductComponent } from '../flexbox-product/flexbox-product.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductsComponent, FlexboxProductComponent, CommonModule, RouterLink],
  templateUrl: './home.component.html'
})

export class HomeComponent {

}
