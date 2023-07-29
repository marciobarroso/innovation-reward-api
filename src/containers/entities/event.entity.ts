import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, ManyToOne } from 'typeorm'
import { BaseEntity } from '../../common/base-entity'
import { Container } from './container.entity'
import { Sensor } from './sensor.entity'

@Entity('events')
export class Event extends BaseEntity {
  @ApiProperty({
    example: '32145352',
    description: 'The customer identification number'
  })
  @Column('varchar', { name: 'customer_id', length: 10 })
  customerId: string

  @ManyToOne(() => Container, container => container.events)
  container: Container

  @ManyToOne(() => Sensor, sensor => sensor.events)
  sensor: Sensor
}
