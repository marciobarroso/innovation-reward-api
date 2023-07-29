import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ContainersController } from './containers.controller'
import { ContainersService } from './containers.service'
import { Container } from './entities/container.entity'
import { Event } from './entities/event.entity'
import { Sensor } from './entities/sensor.entity'

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Container, Sensor, Event])],
  controllers: [ContainersController],
  providers: [ContainersService]
})
export class ContainersModule {}
