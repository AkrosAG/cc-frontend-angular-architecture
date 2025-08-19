import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {BannerType} from "@appcomponents/banner/banner-type";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [CommonModule, MatRadioButton, MatRadioGroup, FormsModule],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss'
})
export class RadioGroupComponent {

  selectedBannerType: BannerType = BannerType.INFO;

  @Output() onInputChange = new EventEmitter<BannerType>();

  inputChange(val) {
    console.log(val)
    this.onInputChange.emit(val)
  }

  protected readonly BannerType = BannerType;
}
