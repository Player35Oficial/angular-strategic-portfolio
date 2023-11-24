import { Component, Input } from '@angular/core';
import { IconDefinition, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonLabel? = '';
  @Input() buttonIcon!: IconDefinition;
  @Input() secondIcon?: IconDefinition;
  @Input() color = '';
  @Input() typeButton = '';
}
