import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class Store {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  ville: string;

  @Column()
  superficie: number;

  @Column()
  siren: string;

  @Column()
  employe: string;

  @Column()
  description: string;
}
