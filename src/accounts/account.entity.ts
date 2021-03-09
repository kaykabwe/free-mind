import { Client } from 'src/clients/client.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint', width: 5 })
  accountId: number;

  @Column()
  clientId: number;

  @Column('money')
  balance: number;

  @ManyToOne((type) => Client, (client) => client.accounts)
  client: Client;
}
