import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/container/home-container.component').then(
        (mod) => mod.HomeContainerComponent,
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/container/login-container.component').then(
        (mod) => mod.LoginContainerComponent,
      ),
  },
  {
    path: 'chart',
    loadComponent: () =>
      import('./features/chart/container/chart-container.component').then(
        (mod) => mod.ChartContainerComponent,
      ),
    children: [
      ...['bubble', 'column', 'stock', 'doughnut'].map((path) => ({
        path,
        loadComponent: () =>
          import('./features/chart/container/chart-container.component').then(
            (mod) => mod.ChartContainerComponent,
          ),
      })),
    ],
  },
];
