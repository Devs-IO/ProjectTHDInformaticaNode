import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, } from "typeorm";

@Entity('providers')
class Providers {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  contact_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Providers;
