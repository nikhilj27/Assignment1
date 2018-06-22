import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
 <div style = "text-align:center">
  <h1>
  Welcome to {{ title }}!
</h1>
<h2>Educating For Better Tommorow</h2>
<app-mycomp></app-mycomp>
</div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous Infosystems';
}
