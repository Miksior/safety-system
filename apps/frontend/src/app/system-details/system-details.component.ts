import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SystemDetailsDto } from 'apps/shared/dto.types';
import { SitesService } from '../sites.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'safety-system-system-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './system-details.component.html',
})
export class SystemDetailsComponent {
  public systemDetails$: Observable<SystemDetailsDto[]>;

  constructor(public sitesService: SitesService, private route: ActivatedRoute) {
    const systemId = this.route.snapshot.paramMap.get('system_id');
    const siteId = this.route.snapshot.paramMap.get('site_id');
    this.systemDetails$ = this.sitesService.getSystem(siteId!, systemId!);
  }

}
