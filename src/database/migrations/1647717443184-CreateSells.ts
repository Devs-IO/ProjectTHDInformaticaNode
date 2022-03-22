import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSelld1647717443184 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table ({
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
              name: 'paymentOptions_id',
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
              name:'total_value',
              type: 'integer',
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
      await queryRunner.createForeignKey (
        'clients',
        new TableForeignKey({
          name: 'FKSelldClients',
          columnNames: ['clients_id'],
          referencedTableName: 'clients',
          referencedColumnNames: ['id'],
        })
      ),
      await queryRunner.createForeignKey (
        'status',
        new TableForeignKey({
          name: 'FKSelldStatus',
          columnNames: ['status_id'],
          referencedTableName: 'status',
          referencedColumnNames: ['id'],
        })
      ),
      await queryRunner.createForeignKey (
        'paymentOptions',
        new TableForeignKey({
          name: 'FKSelldPaymentOptions',
          columnNames: ['paymentOptions_id'],
          referencedTableName: 'paymentOptions',
          referencedColumnNames: ['id'],
        })
      )
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('sells')
    }

}
