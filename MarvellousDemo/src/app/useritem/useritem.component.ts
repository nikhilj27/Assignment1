import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-useritem',
  templateUrl: './useritem.component.html',
  styleUrls: ['./useritem.component.css']
})
export class UseritemComponent implements OnInit {

  public array:string[];
  @Input() public name:string;
  constructor() {

    //this.array = ['123','234','345','456'];
    this.name = "Nikhil";
   }

  ngOnInit() {
  }

}
