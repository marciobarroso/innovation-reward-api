import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('health-check')
@Controller('health-check')
export class HealthCheckController {
  @ApiOperation({ summary: 'Health Check' })
  @ApiResponse({ status: 200, description: 'Every thing is ok' })
  @Get()
  async get(): Promise<object> {
    return {
      message: {
        status: 'ok'
      }
    }
  }
}
