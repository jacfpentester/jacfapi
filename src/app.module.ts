import { Module } from '@nestjs/common';
import { JacfAuthModule } from './modules/jacf-auth/jacf-auth.module';
import { JacfSeedModule } from './modules/jacf-seed/jacf-seed.module';
import { JacfAparatosModule } from './modules/jacf-aparatos/jacf-aparatos.module';
import { JacfIncidenciasModule } from './modules/jacf-incidencias/jacf-incidencias.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({ 
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
     type:'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      // password: process.env.DB_PASSWORD,
      password: 'pswIncidencias',
      autoLoadEntities: true,
      synchronize: true
  }),
  JacfAuthModule,
  JacfAparatosModule,
  JacfIncidenciasModule,
  JacfSeedModule,
  ]
})
export class AppModule {}
