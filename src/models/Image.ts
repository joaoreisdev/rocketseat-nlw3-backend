import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'; 
import Orphanage from './Orphanage'


//com o Decorator o Typeorm vai entender que essa classe ta associada a tabela Orphanage
@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'orphanage_id'})
    orphanage: Orphanage;
}