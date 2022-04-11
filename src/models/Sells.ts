import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import Clients from './Clients';
import PaymentOptions from './PaymentOptions';
import Status from './Status';

@Entity('sells')
class Sells {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  clients_id: string;

  @OneToOne(() => Clients, clients => clients.id)
  @JoinColumn({name: 'clients_id'})
  clients: Clients;

  @Column('uuid')
  status_id: string;

  @OneToOne(() => Status, status => status.id)
  @JoinColumn({name: 'status_id'})
  status: Status;

  @Column('uuid')
  paymentOptions_id: string;

  @OneToOne(() => PaymentOptions, paymentOptions => paymentOptions.id)
  @JoinColumn({name: 'paymentOptions_id'})
  paymentOptions: PaymentOptions;

  @Column()
  code: string;

  @Column()
  discount: number;

  @Column()
  total_value: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
};

export default Sells;
