import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('paymentOptions')
class PaymentOptions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  options: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
};

export default PaymentOptions;
