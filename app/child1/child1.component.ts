import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  public ret:string="";
  constructor(public nobj:NumberService) { }

  ngOnInit(): void {
    this.ret = this.nobj.checkPrime();
  }

}
