import {ChartService} from './../../chart/service/chart.service';
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavComponent} from '../component/sidenav.component';
import {SidenavService} from '../service/sidenav.service';
import {NavItem} from '../component/api/nav-item';

@Component({
  selector: 'app-sidenav-container',
  standalone: true,
  imports: [CommonModule, SidenavComponent],
  template: `
    <app-sidenav
      [navItems]="this.sidenavService.navItems$ | async"
      [activeItem]="this.sidenavService.activeItem$ | async"
      (itemSelectEvent)="onItemSelect($event)"
    />
  `,
  styles: [],
})
export class SidenavContainerComponent {
  constructor(
    public sidenavService: SidenavService,
    public chartService: ChartService,
  ) {}

  public onItemSelect(navItem: NavItem) {
    this.sidenavService.activeItemSubject$.next(navItem);
    if (navItem.isChart) {
      console.log(`Sidenav: selecting chart "${navItem.label}" with id ${navItem.id}`);
      this.chartService.activeChartSubject$.next(navItem.id);
    }
  }
}
