import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('parcels')
class Parcels {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  id_sales: string;

  @Column()
  parcels: number;


};

//em progresso...
