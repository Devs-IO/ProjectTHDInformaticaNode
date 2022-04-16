import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateProductsSells1650054595563 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products_sells',
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
            name: 'products_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'sells_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'quantity',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'value',
            type: 'varchar',
            isNullable: true,
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
        'products_sells',
        new TableForeignKey({
          name: 'FKProductsSells',
          columnNames: ['products_id'],
          referencedTableName: 'products',
          referencedColumnNames: ['id'],
        })
      )
    await queryRunner.createForeignKey(
      'products_sells',
      new TableForeignKey({
        name: 'FKSellsProducts',
        columnNames: ['sells_id'],
        referencedTableName: 'sells',
        referencedColumnNames: ['id'],
      })
    )
  };

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('products_sells', 'FKProductsSells');
    await queryRunner.dropForeignKey('products_sells', 'FKSellsProducts');

    await queryRunner.dropTable('products_sells')
  }


}
