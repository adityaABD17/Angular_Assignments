import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,AlertModule,BsDropdownModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css',
  providers: [FormBuilder,Validators]
})
export class PersonalInfoComponent 
{
  constructor (public fobj : FormBuilder){}


  PersonalInfo = this.fobj.group(
    {
      firstname : ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lastname : ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      Email : ['',[Validators.required,Validators.email]],
      Phone : [ '',[Validators.required,Validators.minLength(10),Validators.pattern('^[0-9]+$'),Validators.maxLength(10)]],
      address: [''],
      city : ['',[Validators.required, Validators.minLength(4),]],
      State : ['',[Validators.required]],
      ZipCode : ['',[Validators.required,Validators.minLength(5),Validators.pattern('^[0-9]+$')]],
      Comments : ['',[ Validators.required,Validators.minLength(10)]]

    }
  ) 

}
