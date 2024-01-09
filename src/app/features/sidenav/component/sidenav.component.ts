import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavItem} from './api/nav-item';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  @Input() navItems: NavItem[];
  @Input() activeItem: NavItem;
  @Output() itemSelectEvent = new EventEmitter<NavItem>();

  public onItemSelect(item: NavItem) {
    this.itemSelectEvent.emit(item);
  }
}
