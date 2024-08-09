import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isNavbarActive = false;

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }

  closeNavbar() {
    if (this.isNavbarActive) {
      this.isNavbarActive = false;
    }
  }
}
