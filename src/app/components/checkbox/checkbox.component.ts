import {Component, Input} from '@angular/core';

import {MatCheckbox} from '@angular/material/checkbox';
import {Checkbox} from '@featuresmaterial/utils/Checkbox';

@Component({
  selector: 'app-checkbox',
  imports: [MatCheckbox],
  standalone: true,
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {

  @Input() checkboxes: Checkbox[];
}
