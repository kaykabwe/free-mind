import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class PairingSession extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientId: number;

  @CreateDateColumn()
  startDay: string;

  @UpdateDateColumn()
  endDay: string;
}
