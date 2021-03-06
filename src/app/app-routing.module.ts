import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { AppComponent } from './app.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { HelloPageComponent } from './pages/hello-page/hello-page.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
//import { ComponentsColactionsComponent } from './pages/components-colactions/components-colactions.component';
import { filter } from 'rxjs/operators';

declare var ga: any;

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
      { path: 'hello', component: HelloPageComponent },
      { path: '**', redirectTo: '/hello' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private _router: Router) { }

}
