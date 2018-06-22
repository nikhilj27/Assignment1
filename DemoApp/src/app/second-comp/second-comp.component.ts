import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {
  @Input() name : String ;

  constructor() { 
  
  }

  ngOnInit() {
  }

}
