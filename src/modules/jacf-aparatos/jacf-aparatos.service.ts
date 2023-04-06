import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { JacfCreateAparatoDto } from './dto/jacf-create-aparato.dto';
import { JacfUpdateAparatoDto } from './dto/jacf-update-aparato.dto';

// import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { JacfAparato } from '../jacf-aparatos/entities/jacf-aparato.entity';
import { validate as isUUID } from 'uuid';

@Injectable()
export class JacfAparatosService {

  // private readonly logger = new Logger('JmvpAparatosService');

  constructor(

    @InjectRepository(JacfAparato)
    private readonly jacfAparatoRepository: Repository<JacfAparato>,
    // private readonly clienteService: ClientesService

    // private readonly dataSource: DataSource,

  ) {}

  async jacfcreate(jacfcreateAparatoDto: JacfCreateAparatoDto) {
    try {
      const aparato = this.jacfAparatoRepository.create(jacfcreateAparatoDto);
      await this.jacfAparatoRepository.save(aparato);
      return (aparato);
      
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error en BD!')
    }
  }

  jacfgetId(cod: string) {
    // return `This action returns a #${id} jmvpAuth`;
    return this.jacfAparatoRepository.findOne({
      where: { 
        cod
      }
    });
  }

  jacfgetAll() {
    // return `This action returns all jmvpAparatos`;
    return this.jacfAparatoRepository.find({});
  }

  async jacfdeleteAllAparatos() {
    const query = this.jacfAparatoRepository.createQueryBuilder('aparato');

    try {
      return await query
        .delete()
        .where({})
        .execute();

    } catch (error) {
      this.handleDBErrors(error);
    }

  }

   private handleDBErrors (error: any): never{
   if (error.code === '23505')
     throw new BadRequestException(error.detail)
  
   throw new InternalServerErrorException('Please Check Server Error ...')
 }

  // findOne(id: number) {
  //   return `This action returns a #${id} jmvpAparato`;
  // }

  // update(id: number, updateJmvpAparatoDto: UpdateJmvpAparatoDto) {
  //   return `This action updates a #${id} jmvpAparato`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} jmvpAparato`;
  // }
}
