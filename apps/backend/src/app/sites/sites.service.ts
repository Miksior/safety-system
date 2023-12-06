import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sites } from '../../entities/sites';
import { Systems } from '../../entities/systems';
import { UsersSites } from '../../entities/usersSites';
import { Alarms } from '../../entities/alarms';

@Injectable()
export class SitesService {
 constructor(
  @InjectModel(Sites)
  private sitesModel: typeof Sites,
  @InjectModel(Systems)
  private systemsModel: typeof Systems,
  @InjectModel(UsersSites)
  private usersSitesModel: typeof UsersSites,
  @InjectModel(Alarms)
  private alarmsModel: typeof Alarms,
 ) {}

 async getAllSiteInfo(userId: string) {
  const userSites = await this.usersSitesModel.findAll({ where: { user_id: userId } });

  const siteInfo = await Promise.all(userSites.map(async (userSite) => {
    const site = await this.sitesModel.findByPk(userSite.site_id);

    if (!site) {
      return null;
    }

    const system = await this.systemsModel.findOne({ where: { site_id: site.id } });
    const usersCount = await this.usersSitesModel.count({ where: { site_id: site.id } });
    const activeAlarmsCount = await this.alarmsModel.count({
      where: { system_id: system.id, is_active: true }
    });

    return {
      siteName: site.name,
      numberOfUsers: usersCount,
      numberOfActiveAlarms: activeAlarmsCount,
      systemDetailsLink: `${site.id}`,
    };
  }));

  const filteredSiteInfo = siteInfo.filter(site => site !== null);

  return filteredSiteInfo;
}

}
