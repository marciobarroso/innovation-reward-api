import { ApiProperty } from '@nestjs/swagger'
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

export abstract class BaseEntity {
  @ApiProperty({ example: 1, description: 'The id of the entity' })
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number

  @ApiProperty({ example: '25022022', description: 'The created at date' })
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)'
  })
  createdAt?: Date

  @ApiProperty({ example: '25022022', description: 'The updated at date' })
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)'
  })
  updatedAt?: Date
}
