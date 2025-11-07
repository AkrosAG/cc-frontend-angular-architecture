import {Component, EventEmitter, Output} from '@angular/core';

import {MatSlideToggle} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [MatSlideToggle, FormsModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent {
  bannerEnabled: boolean;

  @Output() inputChange = new EventEmitter<boolean>();

  onInputChange(val) {
    this.inputChange.emit(val)
  }

}
