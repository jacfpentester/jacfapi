import { JacfAparato } from "../../jacf-aparatos/entities/jacf-aparato.entity";
import { JacfUsuario } from "../../jacf-auth/entities/jacfUsuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('JacfIncidencias')
export class JacfIncidencia {

    @PrimaryGeneratedColumn('uuid')
    codigo: string;

    @Column('text')
    descripcion: string;

    @Column('text')
    fecha: string;

    @Column('text')
    status: string;


    @Column('text')
    aparatorelCod: string;
    
    @Column('text')
    usuariorelIdea: string;
    
    @ManyToOne(
        () => JacfAparato,
        (JacfAparato) => JacfAparato.incidenciarel,
       // {  onDelete: 'CASCADE' }    
    )
    aparatorel?: JacfAparato;

    @ManyToOne(
        () => JacfUsuario,
        (JacfUsuario) => JacfUsuario.incidenciarel,
       // {  onDelete: 'CASCADE' }    
    )
    usuariorel?: JacfUsuario;
}
