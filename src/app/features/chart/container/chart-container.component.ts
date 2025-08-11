import {SidenavService} from '@features/sidenav/service/sidenav.service';
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartComponent} from '../component/chart.component';
import {ChartService} from '../service/chart.service';
import {RouterLink} from '@angular/router';
import {NavItem} from '@appfeatures/sidenav/component/api/nav-item';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-charts-container',
  standalone: true,
  imports: [CommonModule, ChartComponent, RouterLink, MatButtonModule, MatDividerModule, MatIconModule],
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
