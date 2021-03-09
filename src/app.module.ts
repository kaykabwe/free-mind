import { Module } from '@nestjs/common';
import { AdminModule } from '@admin-bro/nestjs';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { Account } from './accounts/account.entity';
import { Client } from './clients/client.entity';
import { PairingSession } from './pairing-sessions/pairing-session.entity';

const contentNavigation = {
  name: 'admin management',
  icon: 'Accessibilty',
};

const adminBroOptions = {
  rootPath: '/admin',
  // databases: [connection], // connection is always available, no need to pass it
  resources: [
    { resource: User, options: { navigation: contentNavigation } },
    { resource: Account, options: { navigation: contentNavigation } },
    { resource: Client, options: { navigation: contentNavigation } },
    { resource: PairingSession, options: { navigation: contentNavigation } },
  ],
  branding: { companyName: 'Free Mind Vilage Banking' },
};

const auth = {
  authenticate: async (email, password) => Promise.resolve({ email: 'test' }),
  cookieName: 'test',
  cookiePassword: 'testPassword',
};

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AdminModule.createAdminAsync({
      inject: [Connection],
      useFactory: (connection: Connection) => ({
        adminBroOptions: adminBroOptions,
        auth: auth,
      }),
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
