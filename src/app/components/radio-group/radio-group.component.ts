import {Component, EventEmitter, Output} from '@angular/core';

import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {BannerType} from '@appcomponents/banner/banner-type';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [MatRadioButton, MatRadioGroup, FormsModule],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss'
})
export class RadioGroupComponent {

  selectedBannerType: BannerType = BannerType.INFO;

  @Output() inputChange = new EventEmitter<BannerType>();

  onInputChange(val) {
    this.inputChange.emit(val)
  }

  protected readonly BannerType = BannerType;
}
