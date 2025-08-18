import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialComponent} from '../component/material.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {Checkbox} from "@featuresmaterial/utils/Checkbox";

@Component({
  selector: 'app-material-container',
  standalone: true,
  imports: [CommonModule, MaterialComponent, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './material-container.component.html',
  styleUrls: ['./material-container.component.scss'],
})
export class MaterialContainerComponent {

  checkboxes: Checkbox[] = [
    {label: "info", value: false},
    {label: "apples", value: true},
    {label: "oranges", value: true},
    {label: "peaches", value: false},
  ]

  textareaValue = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua";
}
