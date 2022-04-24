import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterCitiesClients1646502187665 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`

        ALTER TABLE clients ADD COLUMN active boolean;

      `);
  };

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('clients', 'active');
  };
};
