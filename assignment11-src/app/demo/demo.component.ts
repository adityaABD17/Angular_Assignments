import { Component} from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers: [ArithmaticService]
})
export class DemoComponent {
  chkNo : number =0;
  isPrimeResult: boolean | null = null;

  constructor(private ArthSer : ArithmaticService){}

  chkPrime()
  {
    if(this.chkNo !== undefined && this.chkNo!== null)
    {
      this.isPrimeResult = this.ArthSer.isPrime(this.chkNo)
    }
  }
}
