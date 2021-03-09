import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
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
}
