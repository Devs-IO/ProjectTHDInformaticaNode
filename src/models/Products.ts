import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Categories from './Categories';
import Providers from './Providers';

@Entity('products')
class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  provider_id: string;

  @OneToMany(() => Providers, provider => provider.id)
  @JoinColumn({ name: 'provider_id' })
  provider: Providers;

  @Column('uuid')
  category_id: string;

  @OneToMany(() => Categories, categories => categories.id)
  @JoinColumn({ name: 'category_id' })
  categories: Categories;

  @Column()
  name: string;

  @Column()
  sell_price: string;

  @Column()
  buy_price: string;

  @Column()
  description: string;

  @Column()
  quantity: string;

  @Column()
  code: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Products;
