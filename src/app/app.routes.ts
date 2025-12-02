import { Routes } from '@angular/router';
import { IceCreamListComponent } from './pages/ice-cream-list/ice-cream-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sorvetes', pathMatch: 'full' },
  { path: 'sorvetes', component: IceCreamListComponent },
  { path: '**', redirectTo: 'sorvetes' }
];
