import { Directive, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true
})
export class CompFailureDirective {

  constructor(private ele : ElementRef) { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.ele.nativeElement.style.background = 'green';
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.ele.nativeElement.style.background = 'black' ;
    this.ele.nativeElement.style.color = 'white'
  }

}
