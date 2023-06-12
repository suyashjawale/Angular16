import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './category.component.html'
})
export class CategoryComponent {

}
