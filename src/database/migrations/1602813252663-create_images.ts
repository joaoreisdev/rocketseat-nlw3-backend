import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602813252663 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'images',
      columns: [
        {
          name : 'id',
          type : 'integer',
          unsigned : true,
          isPrimary : true,
          isGenerated: true,
          generationStrategy : 'increment',
        },
        {
          name : 'path',
          type : 'varchar',
        },
        {
          name : 'orphanage_id',
          type : 'integer',
        }
      ],
      foreignKeys: [
        {
          name: 'imageOrphanage',
          //FK
          columnNames: ['orphanage_id'],
          //Tabela de ref
          referencedTableName: 'orphanages',
          //PK da tabela que está se relacionando
          referencedColumnNames: ['id'],
          //Caso ID do orfanato seja alterado, altera a FK ta tabela do registro da imagem automárico, assim n perde a referencia
          onUpdate: 'CASCADE',
          //Caso as imagens sejam deletadas, deleta as imagens também
          onDelete: 'CASCADE',
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }

}
