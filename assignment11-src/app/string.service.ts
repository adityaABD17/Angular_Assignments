import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  capLtrs : number = 0;

  constructor() { }

  countCapital(str : string) : number
  {
    this.capLtrs = 0;
    for(let i = 0 ; i<(str.length) ; i++)
    {
      if(str[i] >='A' && str[i]<='Z')
      {
        this.capLtrs ++;
      }
    }

    return this.capLtrs
  }
}
