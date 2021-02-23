import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AdminModule } from '@admin-bro/nestjs';

import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import { AccountsModule } from './accounts/accounts.module';
import { PairingSessionsModule } from './pairing-sessions/pairing-sessions.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    AdminModule.createAdmin({
      adminBroOptions: {
        rootPath: '/admin',
        resources: [],
      },
      auth: {
        authenticate: async (email, password) =>
          Promise.resolve({ email: 'test' }),
        cookieName: 'test',
        cookiePassword: 'testPass',
      },
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(),
    UsersModule,
    ClientsModule,
    AccountsModule,
    PairingSessionsModule,
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
