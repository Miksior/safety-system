import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sites } from '../../entities/sites';
import { Systems } from '../../entities/systems';
import { Users } from '../../entities/users';
import { UsersSites } from '../../entities/usersSites';
import { Alarms } from '../../entities/alarms';

@Injectable()
export class SystemdetailsService {
 constructor(
 @InjectModel(Sites)
 private sitesModel: typeof Sites,
 @InjectModel(Systems)
 private systemsModel: typeof Systems,
 @InjectModel(Users)
 private usersModel: typeof Users,
 @InjectModel(UsersSites)
 private usersSitesModel: typeof UsersSites,
 @InjectModel(Alarms)
 private alarmsModel: typeof Alarms,
 ) {}

 async getSystemAlarmInfo(systemId: string) {
  const alarms = await this.alarmsModel.findAll({ where: { system_id: systemId } });

  const alarmInfo = alarms.map((alarm) => {
  return {
    alarmDate: alarm.created_at,
    isActive: alarm.is_active,
  };
  });

  return alarmInfo;
 }

}
