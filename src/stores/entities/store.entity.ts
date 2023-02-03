import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Store {
    
    // @PrimaryGeneratedColumn()
    // id: number;
    
    @Column()
    name: string;
    
    @Column()
    adress: string;

    @Column()
    siren: string;

    @Column()
    superficie: string;

    @Column()
    employe: string;

}
