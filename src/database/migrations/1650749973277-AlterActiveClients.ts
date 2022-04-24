import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterActiveClients1650749973277 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`

        ALTER TABLE clients ADD COLUMN active boolean default true;

      `);
  };

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('clients', 'active');
  };
};
