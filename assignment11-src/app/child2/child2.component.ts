import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers: [StringService]
})
export class Child2Component {

  str : string = '';
  capital : number | null  = null;

  constructor(private strSer: StringService) {}

  chkCap()
  {
    this.capital=null;
    this.capital = this.strSer.countCapital(this.str);
  }

}
