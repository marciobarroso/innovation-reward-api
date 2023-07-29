import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ContainerEventDTO } from './dtos/container-event.dto'
import { Container } from './entities/container.entity'
import { Event } from './entities/event.entity'
import { Sensor } from './entities/sensor.entity'

@Injectable()
export class ContainersService {
  private readonly logger = new Logger(ContainersService.name)

  constructor(
    @InjectRepository(Container)
    private containerRepository: Repository<Container>,
    @InjectRepository(Sensor) private sensorRepository: Repository<Sensor>,
    @InjectRepository(Event) private eventRepository: Repository<Event>
  ) {}

  public async register(dto: ContainerEventDTO): Promise<Event> {
    const container: Container = await this.containerRepository.findOneByOrFail(
      {
        id: dto.containerId
      }
    )

    const sensor: Sensor = await this.sensorRepository.findOneByOrFail({
      id: dto.sensorId
    })

    let event: Event = new Event()
    event.container = container
    event.sensor = sensor
    event.customerId = dto.customerId

    event = await this.eventRepository.create(event)
    return await this.eventRepository.save(event)
  }
}
