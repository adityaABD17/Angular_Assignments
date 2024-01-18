import { Component } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers : [ArithmaticService]
})
export class Child1Component {

  chkNo : number = 0;
  isPrimeResult : boolean | null = null;

  constructor(private ArthSer : ArithmaticService){}

  chkPrime()
  {
    if(this.chkNo !== undefined && this.chkNo!== null)
    {
      this.isPrimeResult = this.ArthSer.isPrime(this.chkNo)
    }
  }


}
