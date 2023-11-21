import {
  faBars,
  faFileLines,
  faRightLong,
  faSun,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { fadeInOutAnimation } from './shared/icon-animations';
import { faJs } from '@fortawesome/free-brands-svg-icons';

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
  jsIcon = faJs;

  rightArrowIcon = faRightLong;
  resumeIcon = faFileLines;

  toggleMenu() {
    let menu = document.querySelector('.header-components.mobile');
    menu!.classList.toggle('open');
    this.isMenuOpen = !this.isMenuOpen;

    this.burgerIcon = this.isMenuOpen ? faXmark : faBars;
  }
}
