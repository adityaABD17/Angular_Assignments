import { Component } from '@angular/core';
import { Nested2Component } from '../nested2/nested2.component';

@Component({
  selector: 'app-nested1',
  standalone: true,
  imports: [Nested2Component],
  templateUrl: './nested1.component.html',
  styleUrl: './nested1.component.css'
})
export class Nested1Component {

}
