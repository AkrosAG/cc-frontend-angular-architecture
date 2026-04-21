import {Component, EventEmitter, Input, Output} from '@angular/core';

import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {BannerType} from '@appcomponents/banner/banner-type';
import {FormsModule} from '@angular/forms';
import {ValueSelector} from '@featuresmaterial/utils/ValueSelector';

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [MatRadioButton, MatRadioGroup, FormsModule],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss'
})
export class RadioGroupComponent {

  @Input()
  selectedBannerType: BannerType;

  @Input() radioGroupValues: ValueSelector[];
  @Output() inputChange = new EventEmitter<BannerType>();

  onInputChange(val: BannerType) {
    this.inputChange.emit(val)
  }

}
