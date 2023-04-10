import { BadRequestException, Injectable } from '@nestjs/common';
import { JacfCreateIncidenciaDto } from './dto/jacf-create-incidencia.dto';
import { JacfUpdateIncidenciaDto } from './dto/jacf-update-incidencia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JacfIncidencia } from './entities/jacf-incidencia.entity';
import { Repository } from 'typeorm';
import { JacfAuthService } from '../jacf-auth/jacf-auth.service';
import { JacfAparatosService } from '../jacf-aparatos/jacf-aparatos.service';

@Injectable()
export class JacfIncidenciasService {
  constructor(
    @InjectRepository(JacfIncidencia)
    private readonly incidenciasRepository: Repository<JacfIncidencia>,
    private readonly usuariosService: JacfAuthService,
    private readonly aparatosService: JacfAparatosService
    ){}

    async jacfcreate(createIncidenciaDto: JacfCreateIncidenciaDto) {
      try {
        const { idea, cod, ...data } = createIncidenciaDto;
        const incidencia = this.incidenciasRepository.create({ ...data });
        incidencia.aparato = await this.aparatosService.jacfgetId(cod);
        incidencia.usuario = await this.usuariosService.jacfgetid(idea);
        await this.incidenciasRepository.save(incidencia);
        return incidencia
      }catch (error) {
        this.handleDBErrors(error)
      }
    }
    private handleDBErrors (error: any): never{
      
      throw new BadRequestException(error.detail)
    
    }

  jacfgetId(codigo: string) {
    return this.incidenciasRepository.findOne({
      where: {
        codigo
      }
    });
  }

  // findAll() {
  //   return this.incidenciasRepository.find({})
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} jacfIncidencia`;
  // }

  // update(id: number, updateJacfIncidenciaDto: JacfUpdateIncidenciaDto) {
  //   return `This action updates a #${id} jacfIncidencia`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} jacfIncidencia`;
  // }

  async jacfdeleteAllUsers(){
    const query = this.incidenciasRepository.createQueryBuilder('user');
    try {
      return await query
        .delete()
        .where({})
        .execute()
    }catch(error){
      this.handleDBErrors(error)
    }
  }
  

}
