import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
  <h1>
    {{ title }}!
  </h1>
  <input type = "text">
  <app-marvellous-comp></app-marvellous-comp>
  </div>

  `,
  styles: [`
  input[type = "text"]
{
    background-color : blue;
} 
  `]
})
export class AppComponent {
  title = 'Marvellous Infosystems';
}
