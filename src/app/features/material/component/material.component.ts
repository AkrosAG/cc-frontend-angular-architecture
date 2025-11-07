import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {Checkbox} from '@featuresmaterial/utils/Checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {BannerComponent} from '@appcomponents/banner/banner.component';
import {BannerType} from '@appcomponents/banner/banner-type';
import {ButtonToggleComponent} from '@appcomponents/button-toggle/button-toggle.component';
import {CheckboxComponent} from '@appcomponents/checkbox/checkbox.component';
import {InputComponent} from '@appcomponents/input/input.component';
import {RadioGroupComponent} from '@appcomponents/radio-group/radio-group.component';
import {TextareaComponent} from '@appcomponents/textarea/textarea.component';
import {ToggleComponent} from '@appcomponents/toggle/toggle.component';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    BannerComponent,
    ButtonToggleComponent,
    CheckboxComponent,
    InputComponent,
    RadioGroupComponent,
    TextareaComponent,
    ToggleComponent
  ],
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialComponent {
  @Input() toggleValue: number;
  @Input() checkboxes: Checkbox[];
  @Input() textareaValue: string;

  bannerEnabled = false;
  bannerValue: string;
  selectedBannerType: BannerType = BannerType.INFO;

  protected readonly BannerType = BannerType;
}
