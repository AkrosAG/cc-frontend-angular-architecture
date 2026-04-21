import {Component, inject} from '@angular/core';
import {MaterialComponent} from '../component/material.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MaterialService} from '@featuresmaterial/service/material.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-material-container',
  standalone: true,
  imports: [MaterialComponent, MatButtonModule, MatDividerModule, MatIconModule, AsyncPipe],
  template: `
    <app-material
      [toggleValue]="3"
      [checkboxes]="this.materialService.checkboxesValues$ | async"
      [textareaValue]="textareaValue"
      [buttonToggleValues]="this.materialService.buttonToggleValues$ | async"
      [radioGroupValues]="this.materialService.radioGroupValues$ | async"/>
  `,
})
export class MaterialContainerComponent {
  public materialService = inject(MaterialService);
  textareaValue = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua";
}
