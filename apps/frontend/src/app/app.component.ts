import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SitesService } from './sites.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './login/auth/auth.service';

@Component({
  standalone: true,
  imports: [
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
export class AppComponent {
  constructor(private authService: AuthService) {}

  public logout(){
    this.authService.logout()
    return false;
  }
}
