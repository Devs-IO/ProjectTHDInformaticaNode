import { MigrationInterface, QueryRunner } from "typeorm";

export class IncludeActiveClientsAndProducts1650749973277 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`

        ALTER TABLE clients
          ADD COLUMN "active" BOOLEAN NOT NULL DEFAULT true;

        ALTER TABLE products
          ADD COLUMN "active" BOOLEAN NOT NULL DEFAULT true;

      `);
  };

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('clients', 'active');
  };
};
