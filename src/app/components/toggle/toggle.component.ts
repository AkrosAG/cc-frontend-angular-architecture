import {Component, EventEmitter, Input, Output} from '@angular/core';

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
  @Input()
  bannerEnabled: boolean;

  @Output() inputChange = new EventEmitter<boolean>();

  @Input()
  showBanner = false;

  onInputChange(val: boolean) {
    this.inputChange.emit(val)
  }

}
