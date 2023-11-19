import { Component } from '@angular/core';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  FaJS = faSquareJs;
}
