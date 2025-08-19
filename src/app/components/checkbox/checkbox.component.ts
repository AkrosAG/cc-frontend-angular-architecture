import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatCheckbox} from "@angular/material/checkbox";
import {Checkbox} from "@featuresmaterial/utils/Checkbox";

@Component({
  selector: 'app-checkbox',
  imports: [CommonModule, MatCheckbox],
  standalone: true,
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {

  @Input() checkboxes: Checkbox[];
}
