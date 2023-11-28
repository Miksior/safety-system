import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from '../../entities/users';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(@InjectModel(Users) private userModel: typeof Users, private jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userModel.findOne({ where: { username: username } });
        if (user) {
            const match = await bcrypt.compare(password, user.password_hash);
            if (match) {
                const { password_hash, ...result } = user.dataValues;
                return result;
            }
        }
        return null;
    }

    async login(user: any): Promise<any> {
      const payload = { username: user.username, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      }
    }
}
