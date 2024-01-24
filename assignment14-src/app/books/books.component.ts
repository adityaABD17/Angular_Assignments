import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  Books :string[] = [
  "Mastering Angular: Build Powerful and Scalable Web Apps",
  "Node.js Design Patterns",
  "Android Programming: The Big Nerd Ranch Guide",
  "Artificial Intelligence: A Modern Approach",
  "Hadoop: The Definitive Guide",
]
}
