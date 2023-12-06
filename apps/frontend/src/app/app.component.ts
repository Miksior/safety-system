import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, UrlSegment } from '@angular/router';
import { SitesService } from './sites.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './login/auth/auth.service';
import { CommonModule } from '@angular/common';
import { Observable, filter, map } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    SitesService,
    AuthService,
  ],
  selector: 'safety-system-root',
  templateUrl: './app.component.html',
})
export class AppComponent{
  constructor(private authService: AuthService, private router: Router, public activatedRoute: ActivatedRoute) {
  }

  public logout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
