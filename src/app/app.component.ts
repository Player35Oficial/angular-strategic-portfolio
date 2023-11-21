import { faBars, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { fadeInOutAnimation } from './shared/icon-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOutAnimation],
})
export class AppComponent {
  title = 'angular-strategic-portfolio';
  isMenuOpen: boolean = false;
  sunIcon = faSun;
  burgerIcon = this.isMenuOpen ? faXmark : faBars;

  toggleMenu() {
    let menu = document.querySelector('.header-components.mobile');
    menu!.classList.toggle('open');
    this.isMenuOpen = !this.isMenuOpen;

    this.burgerIcon = this.isMenuOpen ? faXmark : faBars;
  }
}
