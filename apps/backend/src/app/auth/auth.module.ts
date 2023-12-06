import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.auth';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.auth';
import { Users } from '../../entities/users';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'secret', //this should be in the .env file
      signOptions: { expiresIn: '1m' },
    }),
    SequelizeModule.forFeature([Users]),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
