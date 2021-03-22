import { Client } from 'src/clients/client.entity';
import { PairingSession } from 'src/pairing-sessions/pairing-session.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientId: number;

  @Column('timestamp')
  dayOfDeposit: string;

  @Column('money')
  startAmount: number;

  @Column('timestamp')
  interestDueDay: string;

  @Column('money')
  interestAmount: number;

  @ManyToOne(() => Client, (client) => client.transactions)
  client: Client;

  @ManyToOne(
    () => PairingSession,
    (pairingSession) => pairingSession.transaction_histories,
  )
  pairing_session: PairingSession;
}
