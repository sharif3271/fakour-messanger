import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { EntitiesModule } from './entity/entities.module';
import { AuthModule } from './auth/auth.module';

@Global()
@Module({
  imports: [
    AuthModule,
    EntitiesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [join(__dirname, 'entity', '**', '*.entity{.ts,.js}')],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
