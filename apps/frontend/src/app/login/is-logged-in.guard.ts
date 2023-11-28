import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateFn } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard {
  public canActivate(): boolean {
    const authService = inject(AuthService);
    const router = inject(Router);
    if (!authService.isLoggedIn())
      router.parseUrl('/login');
    return true;
  }
}

export const canActivateLoggedIn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(LoggedInGuard).canActivate();
}
