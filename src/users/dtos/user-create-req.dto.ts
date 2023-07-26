import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, Length } from 'class-validator'

export class UserCreateRequestDTO {
  @ApiProperty({
    example: 'me@mysite.com',
    description: 'The e-mail of the user'
  })
  @IsEmail()
  @IsNotEmpty()
  email: string

  @ApiProperty({
    example: 'fdaga9dgapd###4¢#2',
    description: 'The password of the user'
  })
  @Length(8, 256)
  @IsNotEmpty()
  password: string

  @ApiProperty({
    example: 'fdaga9dgapd###4¢#2',
    description: 'The password of the user'
  })
  @Length(8, 256)
  @IsNotEmpty()
  confirmPassword: string

  @ApiProperty({ example: 'John', description: 'The first name of the user' })
  @IsNotEmpty()
  firstName: string

  @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
  @IsNotEmpty()
  lastName: string
}
