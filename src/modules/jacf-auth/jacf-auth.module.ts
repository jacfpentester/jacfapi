import { Module } from '@nestjs/common';
import { JacfAuthService } from './jacf-auth.service';
import { JacfAuthController } from './jacf-auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JacfUsuario } from './entities/jacfUsuario.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
//import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  controllers: [JacfAuthController],
  providers: [JacfAuthService],
  imports: [ 
    ConfigModule,
    TypeOrmModule.forFeature( [ JacfUsuario ]),
    // PassportModule.register({ defaultStrategy: 'jwt'}),
    // JwtModule.registerAsync({
    //   imports: [ ConfigModule ],
    //   inject: [ ConfigService ],
    //   useFactory: ( configService: ConfigService ) => {
    //     console.log ('JWT Secret --> ', configService.get('JWT_SECRET'));
    //     return {
    //       secret: configService.get('JWT_SECRET'),
    //       signOptions: {
    //           expiresIn: '2h'
    //       }
    //     }
    //   }
    // }),
    // JwtModule.register({
    //   secret: process.env.JWT_SECRET,
    //   signOptions: {
    //     expiresIn: '2h'
    //   }
    // })
  ],
 // exports: [ TypeOrmModule, JacfAuthService, JwtStrategy, PassportModule, JwtModule ]
 exports: [ TypeOrmModule, JacfAuthService ]
})
export class JacfAuthModule {}
