import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SystemdetailsService } from './systemdetails.service';
import { environment } from '../../../../shared/environment/environment';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller(environment.SITESURL)
export class SystemdetailsController {
  constructor(private readonly systemdetailsService: SystemdetailsService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':site_id/system/:system_id')
  async getSystemAlarmInfo(@Param('system_id') systemId: string,) {
  return this.systemdetailsService.getSystemAlarmInfo(systemId);
  }
}
