import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class Article {
@PrimaryGeneratedColumn()
id: string;

@Column()
name :string;

@Column()
price :number;

@Column()
description :string;

@Column()
storeId :string;
}
