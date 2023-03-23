import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/schemas/user.schema';
import { CreateUserDto } from 'src/user/dto/createuser.dto';
import { LoginUserDto } from './dto/loginuser.dto';
import { DeleteUserDto } from './dto/deleteuser.dto';
import { VerifiedEmail } from 'src/user/schemas/verifiedemail.schema';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name)
    private userModel: Model<User>,
    @InjectModel(VerifiedEmail.name)
    private verifiedEmail: Model<VerifiedEmail>,
  ) {}

  async isValidateUser(email: string, password: string): Promise<boolean> {
    const user = await this.findByEmail(email);
    if (!user) {
      return false;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    return isPasswordValid;
  }

  async isValidateEmail(email: string): Promise<boolean> {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  async login(userDto: CreateUserDto): Promise<string> {
    const payload = { user: { email: userDto.email } };
    const access_token = this.jwtService.sign(payload);
    return access_token;
  }

  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  async decodeToken(token: string): Promise<string> {
    const decodedToken = this.jwtService.decode(token);
    return decodedToken['user'];
  }

  async parseToken(cookie: string): Promise<string> {
    const splitedToken = cookie.split('%20')[1];
    return this.decodeToken(splitedToken);
  }

  async cookieToEmail(cookie: string): Promise<string> {
    const info = await this.parseToken(cookie);
    const email = Object.values(info)[0] as string;
    return email;
  }

  async getUser(email: string) {
    return await this.userModel.findOne({ email: email });
  }

  async cookieToUser(cookie: string): Promise<User> {
    const email = await this.cookieToEmail(cookie);
    const user = await this.findByEmail(email);
    return user;
  }

  async handleLogin(dto: LoginUserDto) {
    try {
      const isEmailValid = await this.isValidateEmail(dto.email);
      if (!isEmailValid) {
        throw new Error('올바른 이메일 형식이 아닙니다.');
      }
      const isUser = await this.findByEmail(dto.email);
      if (!isUser) {
        throw new Error('이메일 혹은 패스워드를 찾을 수 없습니다.');
      }
      const isPassword = await this.isValidateUser(dto.email, dto.password);
      if (isPassword === false) {
        throw new Error('이메일 혹은 패스워드를 찾을 수 없습니다.');
      }
      const user = await this.findByEmail(dto.email);
      const token = await this.login(user);
      const accessToken = `Bearer%20${token}`;
      return accessToken;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async handleWithdrawal(
    cookie: string,
    dto: DeleteUserDto,
  ): Promise<{ message: string }> {
    try {
      const email = await this.cookieToEmail(cookie);
      const user = await this.cookieToUser(cookie);
      if (!user) {
        throw new Error('사용자를 찾을 수 없습니다.');
      }
      const isPasswordValid = await bcrypt.compare(dto.password, user.password);
      if (!isPasswordValid) {
        throw new Error('비밀번호가 올바르지 않습니다.');
      }
      const deletedUser = await this.userModel.findOneAndDelete({ email });
      if (!deletedUser) {
        throw new Error('사용자 삭제에 실패했습니다.');
      }
      const deletedvalidateEmail = await this.verifiedEmail.findOneAndDelete({
        email,
      });
      if (!deletedvalidateEmail) {
        throw new Error('이메일 인증 정보 삭제에 실패했습니다.');
      }
      return { message: '사용자 삭제에 성공했습니다.' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
