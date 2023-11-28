import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { SitesService } from './sites.service';
import { environment } from '../../../../shared/environment/environment';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller(environment.SITESURL)
export class SitesController {
 constructor(private readonly sitesService: SitesService) {}

 @UseGuards(JwtAuthGuard)
 @Get()
 async getAllSiteInfo(@Request() req) {
  return this.sitesService.getAllSiteInfo(req.user.userId);
 }
}
