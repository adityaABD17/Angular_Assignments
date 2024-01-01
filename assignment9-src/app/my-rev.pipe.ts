import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {

    var str : any = value;

    var revStr : string = "";

    for(let char of str)
    {
      revStr = char + revStr
    }

    return revStr
   
  }

}
