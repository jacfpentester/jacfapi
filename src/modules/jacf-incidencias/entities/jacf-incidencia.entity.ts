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

    @ManyToOne(
        () => JacfAparato,
        (JacfAparato) => JacfAparato.incidencia,
        {  onDelete: 'CASCADE' }    
    )
    aparato?: JacfAparato;

    @ManyToOne(
        () => JacfUsuario,
        (JacfUsuario) => JacfUsuario.incidencia,
        {  onDelete: 'CASCADE' }    
    )
    usuario?: JacfUsuario;
}
