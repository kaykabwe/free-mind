import { Client } from 'src/clients/client.entity';
import { Transaction } from 'src/transactions/transaction.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PairingSession extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  client_id: number;

  @Column('date', { nullable: true })
  start_day: string;

  @Column('date', { nullable: true })
  end_day: string;

  @ManyToMany(() => Client)
  @JoinTable()
  clients: Client[];

  @OneToMany(() => Transaction, (transaction) => transaction.pairing_session)
  transaction_histories: Transaction[];
}
