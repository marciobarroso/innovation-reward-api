import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { BaseEntity } from '../../common/base-entity'
import { Container } from './container.entity'
import { Event } from './event.entity'

@Entity('sensors')
export class Sensor extends BaseEntity {
  @ApiProperty({
    example: 'description',
    description: 'The description of the sensor'
  })
  @Column('varchar', { name: 'description', length: 256 })
  description: string

  @ManyToOne(() => Container, container => container.sensors)
  @JoinColumn({ name: 'container_id' })
  container: Container

  @OneToMany(() => Event, event => event.sensor)
  events: Event[]
}
