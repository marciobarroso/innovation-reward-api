import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ContainersModule } from './containers/containers.module'
import { DatabaseModule } from './database/database.module'
import { HealthCheckModule } from './health-check/health-check.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    HealthCheckModule,
    UsersModule,
    ContainersModule
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
