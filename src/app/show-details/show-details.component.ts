import { Component } from '@angular/core';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent {
  clickedItems = [];
  showPassword = false;
  onToggleButton() {
    this.clickedItems.push(new Date());
    this.showPassword = !this.showPassword;
  }
}
