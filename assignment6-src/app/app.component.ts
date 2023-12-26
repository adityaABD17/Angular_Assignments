import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewCompComponent } from './new-comp/new-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NewCompComponent],
  template: 
                  `<div>
                <h1>Q.1 ===</h1>
                <input type="text">
                <h2>Marvellous Infosystems</h2>
                <h1>--------------------------------------------------</h1>
                </div>

                <div>
                  <h1>Q.2 ===</h1>
                  <input type="text">
                  <h2 [style.color] = "'blue'">Marvellous Infosystems</h2>
                  <h1>--------------------------------------------------</h1>
                </div>
                
                <div>
                  <app-new-comp></app-new-comp>
                </div>

                <router-outlet></router-outlet>`
  
  ,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'assignment6';

  public Name : any ;



}
