import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NavItem } from '../component/api/nav-item';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  constructor() {
    const router = inject(Router);

    this.activeItem$.subscribe((val: NavItem) => {
      router.navigate([val.path]);
    });
  }
  navItems$: Observable<NavItem[]> = of([
    { label: 'Snippets', id: 1, path: '/' },
    {
      label: 'Charts',
      id: 2,
      path: '/chart',
      isChart: true,
      items: [
        { label: 'Column', id: 3, path: '/chart/column', isChart: true },
        { label: 'Bubble', id: 4, path: '/chart/bubble', isChart: true },
        { label: 'Stock', id: 5, path: '/chart/stock', isChart: true },
        { label: 'Doughnut', id: 6, path: '/chart/doughnut', isChart: true },
      ],
    },
    { label: 'Material playground', id: 7, path: '/material' },
  ]);
  activeItemSubject$: BehaviorSubject<NavItem> = new BehaviorSubject({
    label: 'Snippets',
    id: 1,
    path: '/',
  });
  activeItem$ = this.activeItemSubject$.asObservable();
}
