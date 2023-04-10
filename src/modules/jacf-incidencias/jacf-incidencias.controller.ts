import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JacfIncidenciasService } from './jacf-incidencias.service';
import { JacfCreateIncidenciaDto } from './dto/jacf-create-incidencia.dto';
import { JacfUpdateIncidenciaDto } from './dto/jacf-update-incidencia.dto';

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

  @Get(':codigo')
  findOne(@Param('codigo') codigo: string) {
    return this.jacfIncidenciasService.jacfgetId(codigo);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateJacfIncidenciaDto: JacfUpdateIncidenciaDto) {
  //   return this.jacfIncidenciasService.update(+id, updateJacfIncidenciaDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.jacfIncidenciasService.remove(+id);
  // }
}
