import { PartialType } from '@nestjs/mapped-types';
import { JacfCreateAparatoDto } from './jacf-create-aparato.dto';

export class JacfUpdateAparatoDto extends PartialType(JacfCreateAparatoDto) {}
