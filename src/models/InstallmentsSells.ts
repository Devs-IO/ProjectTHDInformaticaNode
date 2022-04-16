import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Sells from './Sells';

@Entity('installments_sells')
class InstallmentsSells {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  sells_id: string;

  @OneToOne(() => Sells, sells => sells.id)
  @JoinColumn({ name: 'sells_id' })
  sells: Sells;

  @Column()
  number_installments: number;

  @Column()
  value_installments: string;

  @Column()
  total_installments: number;

  @Column()
  payment_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
};

export default InstallmentsSells;
