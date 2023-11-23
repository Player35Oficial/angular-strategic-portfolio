import {
  faArrowUpLong,
  faBars,
  faFileLines,
  faRightLong,
  faSun,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { fadeInOutAnimation } from './shared/icon-animations';
import {
  faGithub,
  faInstagram,
  faJs,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

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
  upArrowIcon = faArrowUpLong;
  resumeIcon = faFileLines;

  instagramIcon = faInstagram;
  linkedInIcon = faLinkedin;
  githubIcon = faGithub;

  toggleMenu() {
    let menu = document.querySelector('.header-components.mobile');
    menu!.classList.toggle('open');
    this.isMenuOpen = !this.isMenuOpen;

    this.burgerIcon = this.isMenuOpen ? faXmark : faBars;
  }

  clicouHehe() {
    console.log('Clicou hehehehehehe');
    window.scrollTo({
      top: -100,
      left: 0,
      behavior: 'smooth',
    });
  }
}
