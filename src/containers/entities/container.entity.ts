import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, OneToMany } from 'typeorm'
import { BaseEntity } from '../../common/base-entity'
import { Event } from './event.entity'
import { Sensor } from './sensor.entity'

@Entity('containers')
export class Container extends BaseEntity {
  @ApiProperty({
    example: 'name',
    description: 'The name of the container'
  })
  @Column('varchar', { name: 'name', length: 256, unique: true })
  name: string

  @ApiProperty({
    example: 'fdaga9dgapd###4¢#2',
    description: 'The uuid of the container'
  })
  @Column('varchar', { name: 'uuid', length: 64 })
  uuid: string

  @OneToMany(() => Sensor, sensor => sensor.container)
  sensors: Sensor[]

  @OneToMany(() => Event, event => event.container)
  events: Event[]
}
