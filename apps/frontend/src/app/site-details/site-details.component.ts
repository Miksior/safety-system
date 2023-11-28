import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SitesService } from '../sites.service';
import { SiteDetailsDto, SiteDto } from 'apps/shared/dto.types';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { environment } from 'apps/shared/environment/environment';

@Component({
  selector: 'site-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './site-details.component.html',
})
export class SiteDetailsComponent {
  public siteDetails$: Observable<SiteDetailsDto[]>;
  public systemUrl = environment.SYSTEMURL;

  constructor(public sitesService: SitesService, private route: ActivatedRoute) {
    this.siteDetails$ = this.sitesService.getSite(this.route.snapshot.paramMap.get('site_id')!);
  }
}
