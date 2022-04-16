import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateSelld1647717443184 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sells',
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
            name: 'clients_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'status_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'payment_options_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'code',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'discount',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'total_value',
            type: 'varchar',
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
        'sells',
        new TableForeignKey({
          name: 'FKSelldClients',
          columnNames: ['clients_id'],
          referencedTableName: 'clients',
          referencedColumnNames: ['id'],
        })
      )
    await queryRunner.createForeignKey(
      'sells',
      new TableForeignKey({
        name: 'FKSelldStatus',
        columnNames: ['status_id'],
        referencedTableName: 'status',
        referencedColumnNames: ['id'],
      })
    ),
      await queryRunner.createForeignKey(
        'sells',
        new TableForeignKey({
          name: 'FKSelldPaymentOptions',
          columnNames: ['payment_options_id'],
          referencedTableName: 'payment_options',
          referencedColumnNames: ['id'],
        })
      )
  };

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('sells', 'FKSelldClients');
    await queryRunner.dropForeignKey('sells', 'FKSelldStatus');
    await queryRunner.dropForeignKey('sells', 'FKSelldPaymentOptions');

    await queryRunner.dropTable('sells')
  }

}
