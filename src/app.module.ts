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
import { Transaction } from './transactions/transaction.entity';
import AdminBro from 'admin-bro';

const contentNavigation = {
  name: 'admin management',
  icon: 'Accessibilty',
};

const summaryNavigation = {
  name: 'summary',
  //icon: 'Report',
};

const themeColorsOptions = {
  primary: '#7851a9',
  lightBck: '#ffc4fe',
  superLightBck: '#ffe9ff',
  bck: '#ffe9ff',
  darkBck: '#880075',
  superDarkBck: '#371232',
};

const adminBroOptions = {
  rootPath: '/admin',
  // databases: [connection], // connection is always available, no need to pass it
  resources: [
    {
      resource: User,
      options: {
        navigation: contentNavigation,
        listProperties: ['id', 'userName', 'firstName', 'lastName', 'email'],
        showProperties: [
          'id',
          'userName',
          'firstName',
          'middleName',
          'lastName',
          'email',
          'isActive',
        ],
        filterProperties: ['id', 'userName'],
      },
    },
    { resource: Account, options: { navigation: contentNavigation } },
    {
      resource: Client,
      options: {
        navigation: contentNavigation,
        properties: {
          date_of_birth: { type: 'date' },
        },
      },
    },
    {
      resource: PairingSession,
      options: {
        navigation: contentNavigation,
        properties: {
          start_day: { type: 'date' },
          end_day: { type: 'date' },
        },
      },
    },
    { resource: Transaction, options: { navigation: summaryNavigation } },
  ],
  branding: {
    companyName: 'Free Mind Vilage Banking',
    //logo: '/public/images/logo/logo.jpg',
    theme: {
      colors: {
        primary: '#7851a9',
        lightBck: '#ffc4fe',
        superLightBck: '#ffe9ff',
        bck: '#ffe9ff',
        darkBck: '#880075',
        superDarkBck: '#371232',
      },
    },
  },
  //dashboard: { component: AdminBro.bundle('./my-dashboard-component') },
};

const auth = {
  authenticate: async (email, password) => Promise.resolve({ email: 'test' }),
  cookieName: 'test',
  cookiePassword: 'testPassword',
};

/*const authReal = {
  authenticate: myAuthentication(),
  cookieName: 'village_bank',
  cookiePassword: 'lostWankanda',
};

function myAuthentication(username, password) {
  // call function that returns auth here
}*/

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
