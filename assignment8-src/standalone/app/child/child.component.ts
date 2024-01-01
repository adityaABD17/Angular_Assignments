import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  public str : any ;
  @Output() public EvEm = new EventEmitter

  sendMessage(msg : string)
  {
    this.str = msg
    this.EvEm.emit(this.str)
  }
}
