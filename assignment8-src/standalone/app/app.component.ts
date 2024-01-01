import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ChildComponent,Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public Message : any ;
  public sendMsg : any ;
  public disStr : any ;

  public Name : any ;

  sendMessage(str : any)
  {
    this.sendMsg = str ;
  }
  Display(str : any)
  {
    this.disStr = str ;
  }
}
