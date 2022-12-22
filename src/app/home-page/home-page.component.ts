import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
isMenuVisible = false;

toggleMenu(){
  this.isMenuVisible =!this.isMenuVisible;
}

}
