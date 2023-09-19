import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavComponent} from "../component/sidenav.component";
import {Observable, of} from "rxjs";
import {NavItem} from "../component/api/nav-item";

@Component({
  selector: 'app-sidenav-container',
  standalone: true,
  imports: [CommonModule, SidenavComponent],
  template: `
    <app-sidenav [navItems]="navItems$ | async" />
  `,
  styles: [
  ]
})
export class SidenavContainerComponent {

  navItems$: Observable<NavItem[]> = of([
    {label: 'Nav 1'},
    {label: 'Nav 2'},
  ]);

}
