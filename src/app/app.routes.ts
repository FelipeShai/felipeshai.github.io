import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog').then((m) => m.Blog),
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./features/blog/blog-post/blog-post').then((m) => m.BlogPost),
  },
  {
    path: 'contato',
    loadComponent: () => import('./features/contato/contato').then((m) => m.Contato),
  },
  {
    path: 'trajetoria',
    loadComponent: () => import('./features/trajetoria/trajetoria').then((m) => m.Trajetoria),
  },
  {
    path: '**',
    redirectTo: '',
  },
];