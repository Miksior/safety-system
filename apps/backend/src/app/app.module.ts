import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sites } from '../entities/sites';
import { Systems } from '../entities/systems';
import { Users } from '../entities/users';
import { UsersSites } from '../entities/usersSites';
import { Alarms } from '../entities/alarms';
import { SitesService } from './sites/sites.service';
import { SitesController } from './sites/sites.controller';
import { SitedetailsController } from './sitedetails/sitedetails.controller';
import { SitedetailsService } from './sitedetails/sitedetails.service';
import { SystemdetailsService } from './systemdetails/systemdetails.service';
import { SystemdetailsController } from './systemdetails/systemdetails.controller';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';

const MODELS = [Sites, Systems, Users, UsersSites, Alarms];

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'master',
      database: 'database',
      models: MODELS,
    }),
    SequelizeModule.forFeature(MODELS),
    AuthModule,
  ],
  controllers: [
    AppController,
    SitesController,
    SitedetailsController,
    SystemdetailsController,
    AuthController
  ],
  providers: [
    AppService,
    SitesService,
    SitedetailsService,
    SystemdetailsService,
  ],
  exports: [],
})
export class AppModule {}
