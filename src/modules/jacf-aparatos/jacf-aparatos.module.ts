import { Module } from '@nestjs/common';
import { JacfAparatosService } from './jacf-aparatos.service';
import { JacfAparatosController } from './jacf-aparatos.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JacfAparato } from './entities/jacf-aparato.entity';

@Module({
  controllers: [JacfAparatosController],
  providers: [JacfAparatosService],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([ JacfAparato])
  ],
  exports: [ JacfAparatosService ]
})
export class JacfAparatosModule {}
