import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePaymentOptions1647714893163 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table ({
          name: 'paymentOptions',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              generationStrategy: 'uuid',
              isPrimary: true,
              default: 'uuid_generate_v4()',
            },
            {
              name: 'options',
              type: 'varchar',
              isNullable: false,
            },
          ]
        })
      );
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('paymentOptions');
    };

};
