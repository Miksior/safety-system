import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedOutGuard {
  public canActivate(): boolean {
    const authService = inject(AuthService);
    const router = inject(Router);
    if (authService.isLoggedIn())
      router.parseUrl('/mysites');
    return true;
  }
}

export const canActivateLoggedOut: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(LoggedOutGuard).canActivate();
}

