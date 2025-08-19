import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule, MatLabel, MatFormField, MatInput],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {

  @Input() textareaValue: string;
}
