import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { canActivateLoggedOut } from './login/guard.guard';
import { canActivateLoggedIn } from './login/is-logged-in.guard';
import { SystemDetailsComponent } from './system-details/system-details.component';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { MysitesComponent } from './mysites/mysites.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'mysites',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [canActivateLoggedOut],
    component: LoginComponent,
  },
  {
    path: 'mysites',
    canActivate: [canActivateLoggedIn],
    component: MysitesComponent,
  },
  {
    path: 'mysites/:site_id',
    canActivate: [canActivateLoggedIn],
    component: SiteDetailsComponent
  },
  {
    path: 'mysites/:site_id/system',
    redirectTo: 'mysites/:site_id',
    pathMatch: 'full'
  },
  {
    path: 'mysites/:site_id/system/:system_id',
    canActivate: [canActivateLoggedIn],
    component: SystemDetailsComponent
  },
  { path: '**', redirectTo: 'mysites', pathMatch: 'full' },
];
