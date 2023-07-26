import { ApiProperty } from '@nestjs/swagger'
import { Exclude } from 'class-transformer'
import { IsEmail, IsNotEmpty, Length } from 'class-validator'
import { Column, Entity } from 'typeorm'
import { BaseEntity } from '../../common/base-entity'

@Entity('users')
export class User extends BaseEntity {
  @ApiProperty({
    example: 'me@mysite.com',
    description: 'The e-mail of the user'
  })
  @Column('varchar', { name: 'email', length: 256, unique: true })
  @IsEmail()
  email: string

  @ApiProperty({
    example: 'fdaga9dgapd###4¢#2',
    description: 'The password of the user'
  })
  @Column('varchar', { name: 'password', length: 256 })
  @Exclude()
  @Length(8, 256)
  password: string

  @ApiProperty({ example: 'John', description: 'The first name of the user' })
  @Column('varchar', { name: 'first_name', length: 45 })
  @IsNotEmpty()
  firstName: string

  @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
  @Column('varchar', { name: 'last_name', length: 128 })
  lastName: string
}
