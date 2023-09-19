import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SnippetComponent} from "../component/snippet.component";
import {of} from "rxjs";

@Component({
  selector: 'app-snippets-container',
  standalone: true,
  imports: [CommonModule, SnippetComponent],
  template: `
    <div class="snippets-container">
      <app-snippet *ngFor="let snippet of snippets | async" [snippet]="snippet" />
    </div>
  `,
  styles: [`
    .snippets-container {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      flex-wrap: wrap;
    }
  `]
})
export class SnippetsContainerComponent {

  private lorem = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ';

  snippets = of([
    {title: 'snippet 1', content: this.lorem},
    {title: 'snippet 2', content: this.lorem + this.lorem},
    {title: 'snippet 3', content: this.lorem + this.lorem},
    {title: 'snippet 4', content: this.lorem},
    {title: 'snippet 5', content: this.lorem},
    {title: 'snippet 6', content: this.lorem},
  ]);
}
