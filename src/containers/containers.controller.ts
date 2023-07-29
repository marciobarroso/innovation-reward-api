import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ContainersService } from './containers.service'
import { ContainerEventDTO } from './dtos/container-event.dto'
import { Event } from './entities/event.entity'

@ApiTags('containers')
@Controller('containers')
export class ContainersController {
  constructor(private containersService: ContainersService) {}

  @Post('register')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Register a new event' })
  public async register(@Body() dto: ContainerEventDTO): Promise<Event> {
    return await this.containersService.register(dto)
  }
}
