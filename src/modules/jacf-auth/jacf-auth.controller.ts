import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JacfAuthService } from './jacf-auth.service';
import { JacfCreateUserDto } from './dto/jacf-create-user.dto';
import { JacfUpdateUserDto } from './dto/jacf-update-user.dto';

@Controller('jacf-auth')
export class JacfAuthController {
  constructor(private readonly jacfAuthService: JacfAuthService) {}

  @Post('register')
  jacfcreate(@Body() jacfcreateUserDto: JacfCreateUserDto) {
    return this.jacfAuthService.jacfregister(jacfcreateUserDto);
  }

  @Get()
  findAll() {
    return this.jacfAuthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jacfAuthService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() jacfUpdateUserDto: JacfUpdateUserDto) {
    return this.jacfAuthService.update(+id, jacfUpdateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jacfAuthService.remove(+id);
  }
}
