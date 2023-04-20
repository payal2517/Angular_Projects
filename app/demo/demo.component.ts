import { Component, OnInit } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public AddRet:any;
  public SubRet:any;
  constructor(public obj:ArithmaticService) { }

  ngOnInit(): void {
    this.AddRet = this.obj.Addition();
    this.SubRet = this.obj.Subtraction();
  }

}
