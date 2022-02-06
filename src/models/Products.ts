import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import Categories from './Categories';
import Providers from './Providers';

@Entity('products')
export default class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  provider_id: string;

  @OneToOne(() => Providers )
  @JoinColumn({name: 'provider_id' })
  provider: Providers;

  @Column('uuid')
  category_id: string;

  @OneToOne(() => Categories )
  @JoinColumn({name: 'category_id' })
  categories: Categories;

  @Column()
  name: string;

  @Column()
  sell_price: number;

  @Column()
  buy_price: number;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  code: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
