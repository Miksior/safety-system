import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sites } from '../../entities/sites';
import { Systems } from '../../entities/systems';
import { Alarms } from '../../entities/alarms';

@Injectable()
export class SitedetailsService {
 constructor(
 @InjectModel(Sites)
 private sitesModel: typeof Sites,
 @InjectModel(Alarms)
 private alarmsModel: typeof Alarms,
 ) {}

 async getSiteSystemInfo(siteId: string) {
  const site = await this.sitesModel.findOne({
    where: { id: siteId },
    include: [{ model: Systems, as: 'systems' }],
  });

  if (!site) {
  throw new Error('Site not found');
  }

  const systemInfo = await Promise.all(site.systems.map(async (system) => {
    const activeAlarms = await this.alarmsModel.count({ where: { system_id: system.id, is_active: true } });
    const lastActiveAlarm = await this.alarmsModel.findOne({ where: { system_id: system.id, is_active: true }, order: [['created_at', 'DESC']] });
    return {
      systemName: system.name,
      numberOfActiveAlarms: activeAlarms,
      lastActiveAlarmDate: lastActiveAlarm ? lastActiveAlarm.created_at : null,
      systemDetailsLink: `${system.id}`,
    };
    })
  );

  return systemInfo;
 }



}
