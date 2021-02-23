import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint', width: 5 })
  accountId: number;

  @Column()
  clientId: number;

  @Column('money')
  balance: number;
}
