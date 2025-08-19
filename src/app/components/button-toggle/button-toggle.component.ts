import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatButtonToggleGroup, MatButtonToggleModule} from "@angular/material/button-toggle";

@Component({
  selector: 'app-button-toggle',
  standalone: true,
  imports: [CommonModule, MatButtonToggleGroup, MatButtonToggleModule],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss'
})
export class ButtonToggleComponent {
  @Input() toggleValue: number;
}
