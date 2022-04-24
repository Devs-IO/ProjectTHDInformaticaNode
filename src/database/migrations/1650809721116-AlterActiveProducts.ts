import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterActiveProducts1650809721116 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`

        ALTER TABLE products ADD COLUMN active boolean default true;

      `);
  };

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('products', 'active');
  };

};
