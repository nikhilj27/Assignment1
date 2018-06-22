import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-comp',
  template: `
  
  <p>
  Inside First Component <br>
  {{name}}
</p>
<button (click) = "fun()">click</button>
<ul>
<li *ngFor = "let name of names">Hello {{name}}</li>
</ul>
<ul>
<li *ngFor = "let individualUserName of names">
<app-second-comp [name] = "individualUserName"></app-second-comp>
</li>
</ul>

  `,
  styles: [`
  p
  {
    color : red;
  }
  `]
})
export class MarvellousCompComponent implements OnInit {

  public name:String = "Marvellous Infosystems";

  names:String[];
  constructor() 
  {
    this.names = ['abc','pqr','xyz','mno'];
   }

  public  fun()
  {
    this.name = "Button Clicked";
  }
  ngOnInit() {
  }

}
