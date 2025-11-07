import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Snippet} from '../api/snippet';

@Component({
  selector: 'app-snippet',
  standalone: true,
  imports: [],
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnippetComponent {
  @Input() snippet: Snippet;
}
