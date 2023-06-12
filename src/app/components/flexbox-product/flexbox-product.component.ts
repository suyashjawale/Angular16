import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flexbox-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './flexbox-product.component.html',
  styleUrls: ['./flexbox-product.component.css']
})
export class FlexboxProductComponent {
	counter(i: number) {
		return new Array(i);
	}
}
