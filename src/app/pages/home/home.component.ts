import { Component } from '@angular/core';
import {
  faJs,
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faRightLong,
  faArrowUpLong,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  jsIcon = faJs;

  rightArrowIcon = faRightLong;
  upArrowIcon = faArrowUpLong;
  resumeIcon = faFileLines;

  instagramIcon = faInstagram;
  linkedInIcon = faLinkedin;
  githubIcon = faGithub;
}
