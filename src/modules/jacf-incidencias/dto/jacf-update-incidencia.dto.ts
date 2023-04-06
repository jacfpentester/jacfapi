import { PartialType } from '@nestjs/mapped-types';
import { JacfCreateIncidenciaDto } from './jacf-create-incidencia.dto';


export class JacfUpdateIncidenciaDto extends PartialType(JacfCreateIncidenciaDto) {}
