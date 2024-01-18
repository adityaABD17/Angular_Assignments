import { Component , Output , EventEmitter } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent 
{
  @Output() public Signal = new EventEmitter

  public SendMessage()
  {
    this.Signal.emit("Button clicked...")
  }
}
