import {Component, Input} from '@angular/core';

import {MatButtonToggleGroup, MatButtonToggleModule} from '@angular/material/button-toggle';
import {ValueSelector} from '@featuresmaterial/utils/ValueSelector';

@Component({
  selector: 'app-button-toggle',
  standalone: true,
  imports: [MatButtonToggleGroup, MatButtonToggleModule],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss'
})
export class ButtonToggleComponent {
  @Input() toggleValue: number;
  @Input() buttonToggleValues: ValueSelector[];
}
