import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FirstComponent,SecondComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public text1 : string = "Marvellous Infosystems";
  public text2 : string = "Marvellous Infosystems" ;

  fun()
  {
    var str : string = "Marvellous infosystems...";

    return str;
  }

  getMessage()
  {
    console.log(this.text1)
    this.text1 = "Educating for better tomorrow";
  }

  UpperCase()
  {
     this.text2 = this.text2.toUpperCase()
  }
  lowerCase()
  {
    this.text2=this.text2.toLowerCase()
  }
}
