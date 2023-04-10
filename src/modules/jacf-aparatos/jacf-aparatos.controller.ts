import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JacfAparatosService } from './jacf-aparatos.service';
import { JacfCreateAparatoDto } from './dto/jacf-create-aparato.dto';
import { JacfUpdateAparatoDto } from './dto/jacf-update-aparato.dto';

@Controller('jacf-aparatos')
export class JacfAparatosController {
  constructor(private readonly jacfAparatosService: JacfAparatosService) {}

  @Post('jacfcreate')
  create(@Body() jacfcreateAparatoDto: JacfCreateAparatoDto) {
    return this.jacfAparatosService.jacfcreate(jacfcreateAparatoDto);
  }

  @Get()
  findAll() {
    return this.jacfAparatosService.jacfgetAll();
  }
}
