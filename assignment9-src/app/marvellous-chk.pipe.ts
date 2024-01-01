import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone : true 
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param: string): string {
    param = param.toLowerCase();

    switch (param) {
      case "even":
        return value % 2 === 0 ? " is Even..." : " is not even...";

      case "odd":
        return value % 2 !== 0 ? " is odd..." : " is not odd";

      case "prime":
        if (value <= 1) {
          return " is not prime";
        }
        for (let i = 2; i <= Math.sqrt(value); i++) {
          if (value % i === 0) {
            return " is not prime...";
          }
        }
        return " is prime...";

      case "perfect":
        if (value === 1) {
          return " is not perfect";
        }
        let sum = 1;
        for (let i = 2; i <= value / 2; i++) {
          if (value % i === 0) {
            sum += i;
          }
        }
        return sum === value ? " is perfect" : " is not perfect";

      default:
        return "Invalid args ....";
    }
  }
}

