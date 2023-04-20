import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public resultofNumberService:any;
  public resultofStringService:any;

  constructor(public nobj: NumberService, public sobj: StringService) { }

  ngOnInit(): void {
    this.resultofNumberService = this.nobj.checkPrime();
    this.resultofStringService = this.sobj.countCapital();
  }

}
