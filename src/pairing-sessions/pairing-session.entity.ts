import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PairingSession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientId: number;

  @Column('timestamp')
  startDay: string;

  @Column('timestamp')
  endDay: string;
}
