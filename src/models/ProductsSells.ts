import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Products from './Products';
import Sells from './Sells';

@Entity('products_sells')
class ProductsSells {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  products_id: string;

  @OneToOne(() => Products, products => products.id)
  @JoinColumn({ name: 'products_id' })
  products: Products;

  @Column('uuid')
  sells_id: string;

  @OneToOne(() => Sells, sells => sells.id)
  @JoinColumn({ name: 'sells_id' })
  sells: Sells;

  @Column()
  quantity: number;

  @Column()
  value: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
};

export default ProductsSells;
