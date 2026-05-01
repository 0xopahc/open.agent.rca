import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // or home
  // ... other routes
 // { path: 'rca/ishikawa', loadComponent: () => import('./componenets/rca-ishikawa/rca-ishikawa.component').then(m => m.RcaIshikawaComponent) } 
  // or if you prefer a more RCA-centric path:
  // path: 'rca/fishbone/:caseId',   ← later you can add param for real case loading

  // ... other routes
];