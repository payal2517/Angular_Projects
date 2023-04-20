import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  public no1:number = 15;
  constructor() { }
  public checkPrime(){
    let flag:any;
    let i:number = 0;
    if (this.no1 == 0 || this.no1== 1)
      flag = 1;

    for (i = 2; i <= this.no1 / 2; ++i) {
      if (this.no1 % i == 0) {
        flag = 1;
        break;
      }
    }

    if (flag == 0)
      return this.no1 + " " + "is Prime number";
    else
    return this.no1 +" " + "is not a Prime number";



  }
}
