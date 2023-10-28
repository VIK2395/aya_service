import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Emploee } from './emploee.entity';

@Entity({ name: 'statements' })
export class Statement {
  @PrimaryColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'decimal', precision: 38, scale: 2 })
  amount: number;

  @Column({ type: 'date' })
  date: string;

  @ManyToOne(() => Emploee, (emploee) => emploee.statements, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  emploee: Emploee;
}
