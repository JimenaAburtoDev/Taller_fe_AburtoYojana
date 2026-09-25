import { Routes } from '@angular/router';
import { InicioComponent } from './features/landing/pages/inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: '**', redirectTo: '' }
];
