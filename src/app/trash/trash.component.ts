import { Component } from '@angular/core';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent {
    isMenuVisible = false;
  
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    }
}
