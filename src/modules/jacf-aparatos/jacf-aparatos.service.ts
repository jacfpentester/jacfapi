import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { JacfCreateAparatoDto } from './dto/jacf-create-aparato.dto';
import { JacfUpdateAparatoDto } from './dto/jacf-update-aparato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JacfAparato } from '../jacf-aparatos/entities/jacf-aparato.entity';
import { validate as isUUID } from 'uuid';

@Injectable()
export class JacfAparatosService {

  constructor(
    @InjectRepository(JacfAparato)
    private readonly jacfAparatoRepository: Repository<JacfAparato>,
  ) {}

  async jacfcreate(jacfcreateAparatoDto: JacfCreateAparatoDto) {
    try {
      const aparato = this.jacfAparatoRepository.create(jacfcreateAparatoDto);
      await this.jacfAparatoRepository.save(aparato);
      return (aparato);
      
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error!')
    }
  }

  jacfgetId(cod: string) {
    return this.jacfAparatoRepository.findOne({
      where: { 
        cod
      }
    });
  }

  jacfgetAll() {
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
}
