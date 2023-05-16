import { Component } from '@angular/core';
@Component({
  selector: 'app-button',
  template: `
    <button (click)="handleButtonClick()">Click Me</button>
  `,
})
export class ButtonComponent {
  handleButtonClick() {
    console.log('Button clicked!');
    // Add your custom logic here
  }
}
