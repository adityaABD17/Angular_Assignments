import { Component } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child3',
  standalone: true,
  imports: [],
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.css',
  providers: [ArithmaticService,StringService]
})
export class Child3Component {

  No : number = 51;
  str : string = "Marvellous INFOSystems";

  isPrimeResult : boolean | null = null ;
  capCount : number | null = null ;

  constructor(private arth : ArithmaticService , private strS : StringService)
  {
    this.isPrimeResult = this.arth.isPrime(this.No);
    this.capCount = this.strS.countCapital(this.str);
  }

}
