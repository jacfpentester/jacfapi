import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JacfIncidenciasService } from './jacf-incidencias.service';
import { JacfCreateIncidenciaDto } from './dto/jacf-create-incidencia.dto';
import { JacfUpdateIncidenciaDto } from './dto/jacf-update-incidencia.dto';
import { Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('jacf-incidencias')
export class JacfIncidenciasController {
  constructor(private readonly jacfIncidenciasService: JacfIncidenciasService) {}

  @Post('jacfcreate')
  create(@Body() createJacfIncidenciaDto: JacfCreateIncidenciaDto) {
    return this.jacfIncidenciasService.jacfcreate(createJacfIncidenciaDto);
  }

  // @Get()
  // findAll() {
  //   return this.jacfIncidenciasService.findAll();
  // }

  @Get('jacfgetId/:cproducto/:cusuario')
  findOne(@Param('cproducto') cproducto: string, @Param('cusuario') cusuario: string) {
    return this.jacfIncidenciasService.jacfgetId(cproducto, cusuario);
  }

  // @Get('jacfgetId/:cproducto/:cusuario')
  // findOne(@Req() request: Request){
  //   return this.jacfIncidenciasService.jacfgetId(request.query);
  // }
}
