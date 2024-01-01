import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyRevPipe } from './my-rev.pipe';
import { MyAddPipe } from './my-add.pipe';
import { MyMultPipe } from './my-mult.pipe';
import { MarvellousChkPipe } from './marvellous-chk.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , MyRevPipe ,MyAddPipe,MyMultPipe,MarvellousChkPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public Demo : string = "ABCDEFG"
  public Num1 : number = 21
  public Num2 : number = 11
}
