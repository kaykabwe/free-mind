import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char', length: 11 })
  nrc: string;

  @Column({ length: 50 })
  first_name: string;

  @Column({ length: 50 })
  middle_name: string;

  @Column({ length: 50 })
  last_name: string;

  @Column('date')
  date_of_birth: string;

  @Column({ length: 13 })
  phone: string;

  @Column({ length: 300 })
  address: string;

  @Column({ length: 25 })
  occupation: string;
}
