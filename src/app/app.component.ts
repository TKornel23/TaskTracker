import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHidden: boolean = false;

  hideForm(): void {
    this.isHidden = !this.isHidden;
    console.log(this.isHidden);
  }
}
