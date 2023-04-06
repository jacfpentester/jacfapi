import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JacfIncidenciasService } from './jacf-incidencias.service';
import { JacfCreateIncidenciaDto } from './dto/jacf-create-incidencia.dto';
import { JacfUpdateIncidenciaDto } from './dto/jacf-update-incidencia.dto';

@Controller('jacf-incidencias')
export class JacfIncidenciasController {
  constructor(private readonly jacfIncidenciasService: JacfIncidenciasService) {}

  @Post()
  create(@Body() createJacfIncidenciaDto: JacfCreateIncidenciaDto) {
    return this.jacfIncidenciasService.create(createJacfIncidenciaDto);
  }

  @Get()
  findAll() {
    return this.jacfIncidenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jacfIncidenciasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJacfIncidenciaDto: JacfUpdateIncidenciaDto) {
    return this.jacfIncidenciasService.update(+id, updateJacfIncidenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jacfIncidenciasService.remove(+id);
  }
}
