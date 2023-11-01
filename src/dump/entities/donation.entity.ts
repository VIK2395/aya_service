import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Emploee } from './emploee.entity';

@Entity({ name: 'donations' })
export class Donation {
  @PrimaryColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'decimal', precision: 38, scale: 2 })
  amount: number;

  @Column({ type: 'date' })
  date: string;

  @ManyToOne(() => Emploee, (emploee) => emploee.donations, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  emploee: Emploee;
}
