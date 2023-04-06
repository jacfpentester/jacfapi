import { Injectable } from '@nestjs/common';
import { JacfCreateIncidenciaDto } from './dto/jacf-create-incidencia.dto';
import { JacfUpdateIncidenciaDto } from './dto/jacf-update-incidencia.dto';

@Injectable()
export class JacfIncidenciasService {
  create(jacfCreateIncidenciaDto: JacfCreateIncidenciaDto) {
    return 'This action adds a new jacfIncidencia';
  }

  findAll() {
    return `This action returns all jacfIncidencias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jacfIncidencia`;
  }

  update(id: number, updateJacfIncidenciaDto: JacfUpdateIncidenciaDto) {
    return `This action updates a #${id} jacfIncidencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} jacfIncidencia`;
  }
}
