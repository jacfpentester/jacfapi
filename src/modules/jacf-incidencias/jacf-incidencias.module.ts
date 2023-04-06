import { Module } from '@nestjs/common';
import { JacfIncidenciasService } from './jacf-incidencias.service';
import { JacfIncidenciasController } from './jacf-incidencias.controller';

@Module({
  controllers: [JacfIncidenciasController],
  providers: [JacfIncidenciasService]
})
export class JacfIncidenciasModule {}
