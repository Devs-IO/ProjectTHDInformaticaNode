import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateInstallmentsSells1650054573210 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'installments_sells',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
            isUnique: true,
          },
          {
            name: 'sells_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'number_installments',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'value_installments',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'total_installments',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'payment_date',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          },
        ]
      })
    ),
      await queryRunner.createForeignKey(
        'installments_sells',
        new TableForeignKey({
          name: 'FKInstallmentsSell',
          columnNames: ['sells_id'],
          referencedTableName: 'sells',
          referencedColumnNames: ['id'],
        })
      )
  };

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('installments_sells', 'FKInstallmentsSell');

    await queryRunner.dropTable('installments_sells')
  }


}
