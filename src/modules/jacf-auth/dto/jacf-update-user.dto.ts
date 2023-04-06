import { PartialType } from '@nestjs/mapped-types';
import { JacfCreateUserDto } from './jacf-create-user.dto';

export class JacfUpdateUserDto extends PartialType(JacfCreateUserDto) {}
