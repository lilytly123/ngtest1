import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addEvent(money:HTMLInputElement,date:HTMLInputElement,description:HTMLInputElement) : boolean {
  	console.log(`Adding money:${money.value} and date:${date.value} and description:${description.value}`);
  	return false;
  }
}
