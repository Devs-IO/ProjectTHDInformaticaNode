import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Cities from "./Cities";

@Entity('clients')
class Clients {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column('uuid')
  city_id: string;

  @OneToMany(() => Cities, cities => cities.id)
  @JoinColumn({ name: 'city_id' })
  city: Cities;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Clients;
