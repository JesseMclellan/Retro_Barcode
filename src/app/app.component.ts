import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = ['#ff5500', '#6600cc', '#66ff33', '#00ffcc', '#1ab2ff', '#ff1ab3', '#990099', '#cc0000', '#006600', '#ffff00'];

  shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  newArray = this.shuffle(this.color);
}
