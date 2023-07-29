import { Controller, Get, Logger } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('health-check')
@Controller('health-check')
export class HealthCheckController {
  private readonly logger = new Logger(HealthCheckController.name)

  @ApiOperation({ summary: 'Health Check' })
  @ApiResponse({ status: 200, description: 'Every thing is ok' })
  @Get()
  async get(): Promise<object> {
    this.logger.debug('health-check')
    return {
      message: {
        status: 'ok'
      }
    }
  }
}
