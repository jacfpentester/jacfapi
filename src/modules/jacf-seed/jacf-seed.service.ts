import { Injectable } from '@nestjs/common';
import { JacfAuthService } from '../jacf-auth/jacf-auth.service';
import { JacfAparatosService } from '../jacf-aparatos/jacf-aparatos.service';
import { JacfIncidenciasService } from '../jacf-incidencias/jacf-incidencias.service';
import  dataUsuarios  from '../jacf-seed/data/usuarios.json'; 
import  dataAparatos  from '../jacf-seed/data/aparatos.json';
import  dataIncidencias  from '../jacf-seed/data/incidencias.json';
import { JacfCreateIncidenciaDto} from '../jacf-incidencias/dto/jacf-create-incidencia.dto'

@Injectable()
export class JacfSeedService {
 
  constructor (
    private readonly jacfAuthService: JacfAuthService,
    private readonly jacfAparatosService: JacfAparatosService,
    private readonly jacfIncidenciasService: JacfIncidenciasService,
 ){}
 
 runData(){ 
    this.jacfIncidenciasService.jacfdeleteAllIncidencias();
  //  this.jacfAparatosService.jacfdeleteAllAparatos();
  //  this.jacfAuthService.jacfdeleteAllUsers();
   this.insertNewAparatos();
   this.insertNewUsers();
   this.insertNewIncidencias();
   return dataAparatos;
 }
  
    private async insertNewAparatos(){
      const insertPromises = [];
      dataAparatos.forEach( aparato => {
        insertPromises.push(this.jacfAparatosService.jacfcreate(aparato))
      })
      await Promise.all(insertPromises);
    }

    private async insertNewUsers(){
      const insertPromises = [];
      dataUsuarios.forEach( user => {
        insertPromises.push(this.jacfAuthService.jacfregister(user))
      })
      await Promise.all(insertPromises);
    }

    private async insertNewIncidencias(){
      const insertPromises = [];
      dataIncidencias.forEach( incidencia => {
        insertPromises.push(this.jacfIncidenciasService.jacfcreate(incidencia))
      })
      await Promise.all(insertPromises);
    }
}
