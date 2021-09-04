import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

const tableName = "user_profiles";

export class CreateUserProfilesTable1630774104785
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: tableName,
        columns: [
          new TableColumn({
            name: "id",
            type: "int",
            isGenerated: true,
            isPrimary: true,
            isNullable: false,
          }),
          new TableColumn({
            name: 'name',
            type: 'varchar',
            isNullable: false,
          })
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName);
  }
}
