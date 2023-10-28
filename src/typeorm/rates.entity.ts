import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'rates' })
export class Rate {
  @PrimaryColumn({ type: 'date' })
  date: string;

  // https://orkhan.gitbook.io/typeorm/docs/entities
  @PrimaryColumn({ type: 'char', length: 3 })
  sign: string;

  @Column({ type: 'decimal', scale: 16 })
  value: number;
}
