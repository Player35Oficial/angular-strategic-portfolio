import { Component } from '@angular/core';
import { faGithub, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import {
  faGlobe,
  faLeftLong,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  FaJS = faSquareJs;
  leftIcon = faLeftLong;
  upRightIcon = faUpRightFromSquare;
  githubIcon = faGithub;
  globeIcon = faGlobe;
}
