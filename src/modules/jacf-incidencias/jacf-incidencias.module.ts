import { Module } from '@nestjs/common';
import { JacfIncidenciasService } from './jacf-incidencias.service';
import { JacfIncidenciasController } from './jacf-incidencias.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JacfIncidencia } from './entities/jacf-incidencia.entity';
import { JacfAuthModule } from '../jacf-auth/jacf-auth.module';
import { JacfAparatosModule } from '../jacf-aparatos/jacf-aparatos.module';

@Module({
  controllers: [JacfIncidenciasController],
  providers: [JacfIncidenciasService],
  imports: [
    ConfigModule,
    JacfAuthModule,
    JacfAparatosModule,
    TypeOrmModule.forFeature([JacfIncidencia])
  ],
  exports: [ JacfIncidenciasService,
    TypeOrmModule
   ]
})
export class JacfIncidenciasModule {}
