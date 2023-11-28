import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Sites } from '../../../../shared/site.types';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../shared/environment/environment';
import { SitesService } from '../sites.service';
import { SiteDto } from 'apps/shared/dto.types';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-my-sites',
  templateUrl: './mysites.component.html',
})
export class MysitesComponent {
  public sites$: Observable<SiteDto[]>;

  constructor(public sitesService: SitesService) {
    this.sites$ = this.sitesService.getSites();
  }
}
