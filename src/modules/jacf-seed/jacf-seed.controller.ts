import { Controller, Get } from '@nestjs/common';
import { JacfSeedService } from './jacf-seed.service';

@Controller('jacf-seed')
export class JacfSeedController {
  constructor(private readonly jacfSeedService: JacfSeedService) {}

    @Get()
    executeSeed() {
      console.log('jacf-seed');
      //return this.jacfSeedService.runData();
  }
}
