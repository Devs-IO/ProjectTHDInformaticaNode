import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterCitiesClients1646502187665 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE clients DROP COLUMN city;

        ALTER TABLE clients ADD COLUMN  city_id uuid;

        ALTER TABLE clients ADD CONSTRAINT id_fk_cities
        FOREIGN KEY(city_id) REFERENCES cities (id);
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query(`
      ALTER TABLE clients DROP COLUMN city_id;
      ALTER TABLE clients ADD COLUMN  city string;
    `);
  }

}
