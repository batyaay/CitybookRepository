/*import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { HelloPageComponent } from './pages/hello-page/hello-page.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { ComponentsColactionsComponent } from './pages/components-colactions/components-colactions.component';

const routes: Routes = [
   {
    path: 'citybook',
    component: DashboardLayoutComponent,
    children: [
      { path: 'hello', component: HelloPageComponent },
      { path: 'user', component: UserPageComponent },
      { path: '**', redirectTo: '/hello' }
    ]
  }, {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'hello', component: DashboardLayoutComponent },
      { path: '**', redirectTo: '/hello' }
    ]
  }
];

export const AppRouting: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });
*/