import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeService} from "../service/home.service";
import {HomeComponent} from "../component/home.component";

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  template: `
    <app-home
      [snippets]="snippetsService.snippets$ | async"
      (addSnippet)="snippetsService.addSnippet($event)"
    />
  `,
  styles: []
})
export class HomeContainerComponent {
  constructor(public snippetsService: HomeService) {}
}
