import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { JacfCreateUserDto, JacfUpdateUserDto, JacfLoginUserDto } from './dto/index';
import { JacfUsuario } from './entities/jacfUsuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';




@Injectable()
export class JacfAuthService {
  constructor(
    @InjectRepository(JacfUsuario)
    private readonly userRepository: Repository<JacfUsuario>
  ){}

  async jacfregister(createAuthDto: JacfCreateUserDto) {
    try {
      const { password, ...data } = createAuthDto;
      const user = this.userRepository.create({
        ...data,
        password: bcrypt.hashSync( password, 10)
      });
      await this.userRepository.save(user);

      delete user.password;

      return user;
    } catch (error){
      this.handleDBErrors(error)
    }
  }

  findAll() {
    return this.userRepository.find({});
  }

  findOne(idea: string) {
    return this.userRepository.findOne({
      where: {
        idea
      }
    })
  }

  update(id: number, updateAuthDto: JacfUpdateUserDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async deleteAllUsers(){
    const query = this.userRepository.createQueryBuilder('user');
    try {
      return await query
        .delete()
        .where({})
        .execute()
    }catch(error){
      this.handleDBErrors(error)
    }
  }
  
  private handleDBErrors (error: any): never{
    
      throw new BadRequestException(error.detail)
    
  }
}
