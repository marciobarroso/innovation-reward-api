import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  ValidationPipe
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserCreateRequestDTO } from './dtos/user-create-req.dto'
import { User } from './entities/user.entity'
import { UsersService } from './users.service'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all users' })
  public async getAll(): Promise<Array<User>> {
    return await this.usersService.getAllUsers()
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create new user' })
  public async create(
    @Body(ValidationPipe) user: UserCreateRequestDTO
  ): Promise<void> {
    await this.usersService.create(user)
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Retrieve user by id' })
  public async retrieve(@Param('id') id: number): Promise<User> {
    return await this.usersService.retrieve(id)
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update user' })
  public async update(
    @Param('id') id: number,
    @Body() user: User
  ): Promise<User> {
    return await this.usersService.update(id, user)
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete user by id' })
  public async delete(@Param('id') id: number): Promise<void> {
    await this.usersService.delete(id)
  }
}
