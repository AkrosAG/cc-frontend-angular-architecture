import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, MatFormField, MatLabel, FormsModule, MatInput],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  bannerValue: string;

  @Output() onInputChange = new EventEmitter<string>();

  inputChange(val) {
    this.onInputChange.emit(val)
  }


}
