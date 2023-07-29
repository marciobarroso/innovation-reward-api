import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Length } from 'class-validator'

export class ContainerEventDTO {
  @ApiProperty({
    example: '1',
    description: 'The id of the container'
  })
  @IsNotEmpty()
  containerId: number

  @ApiProperty({
    example: '1',
    description: 'The id of the sensor'
  })
  @IsNotEmpty()
  sensorId: number

  @ApiProperty({
    example: '43214321',
    description: 'The customer identification'
  })
  @Length(8, 10) // 499.321.321-4
  @IsNotEmpty()
  customerId: string
}
