import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        name: 'mysql',
        type: 'mysql',
        host: configService.get('MYSQL_DB_HOST'),
        port: configService.get<number>('MYSQL_DB_PORT'),
        username: configService.get('MYSQL_DB_USERNAME'),
        password: configService.get('MYSQL_DB_PASSWORD'),
        database: configService.get('MYSQL_DB_NAME'),
        poolSize: 22,
        synchronize: /true/.test(process.env.NODE_ENV),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        autoLoadEntities: true
        // logging: 'all'
      })
    })
  ]
})
export class DatabaseModule {}
