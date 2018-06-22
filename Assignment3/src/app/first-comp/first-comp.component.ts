import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  public str1 = "Hello".toUpperCase();
  public name:String = "Marvellous";
  public str = "Infosystems".length;
  constructor() { }

  public fun()
  {
    this.name = "Marvellous Infosystems";
  }

  ngOnInit() {
  }

}
