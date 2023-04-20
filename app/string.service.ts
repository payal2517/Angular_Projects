import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  public countCapital(){
    let str:string = "MarveLLous INFOsystems";
    let count:any;
    count = (str.match(/[A-Z]/g) || []).length;
    return "Count of capital letters in string 'MarveLLous INFOsystems' is = " + count;
  }
}
