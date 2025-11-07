import {Component, EventEmitter, Output} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MatFormField, MatLabel, FormsModule, MatInput],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  bannerValue: string;

  @Output() inputChange = new EventEmitter<string>();

  onInputChange(val) {
    this.inputChange.emit(val)
  }


}
