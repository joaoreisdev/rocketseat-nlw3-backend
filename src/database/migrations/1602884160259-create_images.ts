import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602760621371 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'orphanage_id',
                    type: 'integer',
                },
            ],
            foreignKeys: [
                {   
                    //Nome da FK
                    name: 'imageOrphanage',
                    //Nome da coluna que armazena o relacionamento
                    columnNames: ['orphanage_id'],
                    //Qual tabela ela está se relacionando
                    referencedTableName: 'orphanages',
                    //Qual a coluna na tabela de orphanages que ele esta selecionando
                    referencedColumnNames: ['id'],
                    //Quando atualizar o id do orfanato atualiza automáticamente a FK
                    onUpdate: 'CASCADE',
                    //Caso o ofanato seja deletado deleta as images referenciadas
                    onDelete: 'CASCADE',
                }
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }
}