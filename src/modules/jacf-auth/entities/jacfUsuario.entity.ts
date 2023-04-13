import { JacfIncidencia } from "../../jacf-incidencias/entities/jacf-incidencia.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('JacfUsuarios')
export class JacfUsuario {

    @PrimaryColumn()
    idea:string;

    @Column('text')
    nombre: string;

    @Column('text', { unique: true })
    email: string;

    @Column('text', { select: false })
    password: string;

    @Column('bool', { default: true })
    isActive: boolean = true;

    @Column('text')
    rol: string;


    @OneToMany(
        () => JacfIncidencia,
        (JacfIncidencia) => JacfIncidencia.usuariorel,
        { cascade: true, eager: true  }
    )
    incidenciarel?: JacfIncidencia[];
}