import { Module } from '@nestjs/common';
import { JacfSeedService } from './jacf-seed.service';
import { JacfSeedController } from './jacf-seed.controller';
import { JacfAuthService } from '../jacf-auth/jacf-auth.service';
import { JacfAparatosModule } from '../jacf-aparatos/jacf-aparatos.module';
import { JacfIncidenciasModule } from '../jacf-incidencias/jacf-incidencias.module';
import { JacfAuthModule } from '../jacf-auth/jacf-auth.module';

@Module({
  controllers: [JacfSeedController],
  providers: [JacfSeedService],
  imports: [JacfAparatosModule, JacfAuthModule, JacfIncidenciasModule]
})
export class JacfSeedModule {}

