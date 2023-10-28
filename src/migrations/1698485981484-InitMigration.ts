import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1698485981484 implements MigrationInterface {
    name = 'InitMigration1698485981484'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`statements\` (\`id\` bigint NOT NULL, \`amount\` decimal NOT NULL, \`date\` date NOT NULL, \`emploeeId\` bigint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`donations\` (\`id\` bigint NOT NULL, \`amount\` decimal NOT NULL, \`date\` date NOT NULL, \`emploeeId\` bigint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`emploees\` (\`id\` bigint NOT NULL, \`name\` varchar(255) NOT NULL, \`surename\` varchar(255) NOT NULL, \`departmentId\` bigint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`departments\` (\`id\` bigint NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rates\` (\`date\` date NOT NULL, \`sign\` char(3) NOT NULL, \`value\` decimal NOT NULL, PRIMARY KEY (\`date\`, \`sign\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`statements\` ADD CONSTRAINT \`FK_5f32d9fb0522ef1a72812dfc0d8\` FOREIGN KEY (\`emploeeId\`) REFERENCES \`emploees\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`donations\` ADD CONSTRAINT \`FK_47e4e3b98686c1ce03a123e01f6\` FOREIGN KEY (\`emploeeId\`) REFERENCES \`emploees\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`emploees\` ADD CONSTRAINT \`FK_f0614c044673443d507d7ad0fd6\` FOREIGN KEY (\`departmentId\`) REFERENCES \`departments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`emploees\` DROP FOREIGN KEY \`FK_f0614c044673443d507d7ad0fd6\``);
        await queryRunner.query(`ALTER TABLE \`donations\` DROP FOREIGN KEY \`FK_47e4e3b98686c1ce03a123e01f6\``);
        await queryRunner.query(`ALTER TABLE \`statements\` DROP FOREIGN KEY \`FK_5f32d9fb0522ef1a72812dfc0d8\``);
        await queryRunner.query(`DROP TABLE \`rates\``);
        await queryRunner.query(`DROP TABLE \`departments\``);
        await queryRunner.query(`DROP TABLE \`emploees\``);
        await queryRunner.query(`DROP TABLE \`donations\``);
        await queryRunner.query(`DROP TABLE \`statements\``);
    }

}
