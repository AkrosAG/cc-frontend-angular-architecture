import {Component, Input} from '@angular/core';

import {MatCheckbox} from '@angular/material/checkbox';
import {ValueSelector} from '@featuresmaterial/utils/ValueSelector';

@Component({
  selector: 'app-checkbox',
  imports: [MatCheckbox],
  standalone: true,
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {

  @Input() checkboxes: ValueSelector[];
}
