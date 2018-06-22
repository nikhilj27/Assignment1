import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
  <h1>
    {{ title }}<br>
    Infosystems = {{name}}
  </h1>
  <p>Inside root component </p>
  <input type = "text">
  <app-marvellous-comp></app-marvellous-comp>
  <app-second-comp></app-second-comp>
</div>  `,
  styles: [`
  input[type = "text"]
{
    background-color : blue;
}
  `]
})
export class AppComponent {
  title = 'Marvellous'.toUpperCase();
  name = "Infosystems".length;
}
