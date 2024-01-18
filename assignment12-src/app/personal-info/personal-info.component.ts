import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {

  public FirstName : any ;
  public LastName : any ;
  public Email : any ;

  public getData()
 {
  return
  { 
    
  }
 }

}
