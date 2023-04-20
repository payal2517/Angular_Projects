import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {
  public no1:number = 50;
  public no2:number = 20;
  constructor() { }

  public Addition(){
    return this.no1 + this.no2;
  }
  public Subtraction(){
    return this.no1 - this.no2;
  }
}
