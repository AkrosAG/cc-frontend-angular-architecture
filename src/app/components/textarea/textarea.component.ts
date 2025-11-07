import {Component, Input} from '@angular/core';

import {MatFormField, MatInput, MatLabel} from '@angular/material/input';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [MatLabel, MatFormField, MatInput],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {

  @Input() textareaValue: string;
}
