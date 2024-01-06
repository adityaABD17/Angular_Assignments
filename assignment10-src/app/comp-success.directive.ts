import { Directive, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
  standalone: true
})
export class CompSuccessDirective {

  constructor(private ele : ElementRef ) {}

  @HostListener('mouseenter') onmouseenter()
  {
    this.ele.nativeElement.style.background='red';
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.ele.nativeElement.style.background = 'black'
    this.ele.nativeElement.style.color = 'white'
  }

}
