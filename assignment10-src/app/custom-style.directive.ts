import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  constructor(private ele : ElementRef) 
  {
    this.ele.nativeElement.style.background = 'yellow'
    this.ele.nativeElement.style.fontStyle = 'italic'
  }

  

}
