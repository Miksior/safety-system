import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SitedetailsService } from './sitedetails.service';
import { environment } from '../../../../shared/environment/environment';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller(environment.SITESURL)
export class SitedetailsController {
 constructor(private readonly sitedetailsService: SitedetailsService) {}

 @UseGuards(JwtAuthGuard)
 @Get(':id')
 async getSiteSystemInfo(@Param('id') siteId: string) {
 return this.sitedetailsService.getSiteSystemInfo(siteId);
 }
}
