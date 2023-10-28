import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Emploee } from './emploee.entity';

@Entity({ name: 'departments' })
export class Department {
  @PrimaryColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Emploee, (emploee) => emploee.department)
  emploees: Emploee[];
}
