import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Snippet} from '../api/snippet';

@Component({
  selector: 'app-snippet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnippetComponent {
  @Input() snippet: Snippet;
}
