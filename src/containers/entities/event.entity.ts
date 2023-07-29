import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
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
  @JoinColumn({ name: 'container_id' })
  container: Container

  @ManyToOne(() => Sensor, sensor => sensor.events)
  @JoinColumn({ name: 'sensor_id' })
  sensor: Sensor
}
