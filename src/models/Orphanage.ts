import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'; 

//com o Decorator o Typeorm vai entender que essa classe ta associada a tabela Orphanage
@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;
    
    @Column()
    longitude: number;
    
    @Column()
    about: string;
    
    @Column()
    instructions: string;
    
    @Column()
    opening_hours: string;
    
    @Column()
    open_on_weekends: boolean;
}