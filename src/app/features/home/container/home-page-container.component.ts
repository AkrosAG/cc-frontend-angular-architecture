import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SnippetComponent} from "../../snippets";
import {HomeService} from "../service/home.service";
import {HomeComponent} from "../component/home.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, SnippetComponent, HomeComponent],
  template: `
    <app-home
      [snippets]="snippetsService.snippets$ | async"
      (addSnippet)="snippetsService.addSnippet($event)"
    />
  `,
  styles: []
})
export class HomePageContainerComponent {
  constructor(public snippetsService: HomeService) {}
}
