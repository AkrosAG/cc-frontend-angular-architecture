import {SidenavService} from '@features/sidenav/service/sidenav.service';
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartComponent} from '../component/chart.component';
import {ChartService} from '../service/chart.service';
import {RouterLink} from '@angular/router';
import {NavItem} from '@appfeatures/sidenav/component/api/nav-item';

@Component({
  selector: 'app-sidenav-container',
  standalone: true,
  imports: [CommonModule, ChartComponent, RouterLink],
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.scss'],
})
export class ChartContainerComponent {

  constructor(
    public chartService: ChartService,
    public sidenavService: SidenavService,
  ) {}

  public onLinkSelect(navItem: NavItem) {
    this.sidenavService.activeItemSubject$.next(navItem);
    if (navItem.isChart) {
      this.chartService.activeChartSubject$.next(navItem.id);
    }
  }
}
