import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'villamizar';

  isMenuOpen= false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

