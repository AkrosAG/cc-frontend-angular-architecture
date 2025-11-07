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
      {
        path: 'bubble',
        loadComponent: () =>
          import('./features/chart/container/chart-container.component').then(
            (mod) => mod.ChartContainerComponent,
          ),
      },
      {
        path: 'column',
        loadComponent: () =>
          import('./features/chart/container/chart-container.component').then(
            (mod) => mod.ChartContainerComponent,
          ),
      },
      {
        path: 'stock',
        loadComponent: () =>
          import('./features/chart/container/chart-container.component').then(
            (mod) => mod.ChartContainerComponent,
          ),
      },
      {
        path: 'doughnut',
        loadComponent: () =>
          import('./features/chart/container/chart-container.component').then(
            (mod) => mod.ChartContainerComponent,
          ),
      },
    ],
  },
  {
    path: 'material',
    loadComponent: () =>
      import('./features/material/container/material-container.component').then(
        (mod) => mod.MaterialContainerComponent,
      ),
  },
];
