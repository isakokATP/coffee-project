import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('coffees')
export class Coffee {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;
    
    @Column()
    roast!: string;
}