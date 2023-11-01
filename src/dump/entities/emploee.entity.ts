import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Department } from './department.entity';
import { Statement } from './statement.entity';
import { Donation } from './donation.entity';

@Entity({ name: 'emploees' })
export class Emploee {
  @PrimaryColumn({ type: 'bigint' })
  id: number;

  // https://wanago.io/2021/08/09/constraints-postgresql-typeorm/

  @Column()
  name: string;

  @Column()
  surename: string;

  @ManyToOne(() => Department, (department) => department.emploees, {
    nullable: false,
  })
  department: Department;

  @OneToMany(() => Statement, (statement) => statement.emploee)
  statements: Statement[];

  @OneToMany(() => Donation, (donation) => donation.emploee)
  donations: Donation[];
}
