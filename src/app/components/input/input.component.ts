import {Component, EventEmitter, Input, Output} from '@angular/core';

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

  @Input()
  bannerValue: string;

  @Output() inputChange = new EventEmitter<string>();

  onInputChange(val: string) {
    this.inputChange.emit(val)
  }


}
