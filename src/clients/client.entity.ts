import { Account } from 'src/accounts/account.entity';
import { Transaction } from 'src/transactions/transaction.entity';
import { User } from 'src/users/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.clients)
  user?: User; // foreign key

  @Column('date', { nullable: true })
  date_of_birth: Date;

  @Column({ length: 13 })
  phone: string;

  @Column({ length: 300 })
  address: string;

  @Column({ length: 300, nullable: true })
  comments: string;

  @Column({ length: 25 })
  occupation: string;

  @OneToMany(() => Account, (account) => account.client)
  accounts?: Account[];

  @OneToMany(() => Transaction, (transaction) => transaction.client)
  transactions?: Transaction[];
}
