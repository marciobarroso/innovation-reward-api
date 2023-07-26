import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserCreateRequestDTO } from './dtos/user-create-req.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name)

  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}

  public async getAllUsers(): Promise<Array<User>> {
    this.logger.debug('get all users')
    return await this.usersRepository.find()
  }

  public async create(dto: UserCreateRequestDTO): Promise<void> {
    const user: User = await this.usersRepository.create(dto)
    await this.usersRepository.save(user)
  }

  public async findByEmail(email: string): Promise<User> {
    this.logger.debug('find user by email')
    return await this.usersRepository.findOneOrFail({ where: { email } })
  }

  public async retrieve(id: number): Promise<User> {
    return await this.usersRepository.findOneByOrFail({ id })
  }

  public async update(id: number, user: User): Promise<User> {
    const found: User = await this.usersRepository.findOneByOrFail({ id })

    const userToUpdate = {
      ...found,
      user
    }

    await this.usersRepository.update(id, userToUpdate)

    return await this.usersRepository.findOneBy({ id })
  }

  public async delete(id: number): Promise<void> {
    const found: User = await this.usersRepository.findOneByOrFail({ id })
    await this.usersRepository.remove(found)
  }
}
