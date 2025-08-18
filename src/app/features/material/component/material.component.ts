import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule } from "@angular/forms";
import { Checkbox } from "@featuresmaterial/utils/Checkbox";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {BannerComponent} from "@featuresmaterial/component/banner/banner.component";
import {BannerType} from "@featuresmaterial/component/banner/banner-type";

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    BannerComponent
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
