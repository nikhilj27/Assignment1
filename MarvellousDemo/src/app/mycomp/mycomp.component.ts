import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {

  public demo:string = "Hello";
  public names:String[];
  constructor() {

    this.names = ['abc','pqr','xyz','mno'];
   }

  public fun()
  {
    this.demo = "Nikhil";
    
  }

  ngOnInit() {
  }

}
