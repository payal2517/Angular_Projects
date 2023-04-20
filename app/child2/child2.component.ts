import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  public ret:any;
  constructor(public sobj: StringService) { }

  ngOnInit(): void {
    this.ret = this.sobj.countCapital();
  }

}
