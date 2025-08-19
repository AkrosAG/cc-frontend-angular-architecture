import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule, MatSlideToggle, FormsModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent {
  bannerEnabled: boolean;

  @Output() onInputChange = new EventEmitter<boolean>();

  inputChange(val) {
    this.onInputChange.emit(val)
  }

}
