import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { JacfIncidencia } from '../../jacf-incidencias/entities/jacf-incidencia.entity';

@Entity({ name: 'JacfAparatos' })
export class JacfAparato {
    @PrimaryColumn()
    cod: string;

    @Column('text')
    nombre: string;

    @Column('text')
    tipo: string;

    @Column('text')
    aula: string;

    @Column('integer')
    anio: number;

    @OneToMany(
        () => JacfIncidencia,
        (JacfIncidencia) => JacfIncidencia.aparatorel,
        { cascade: true, eager: true  }
    )
    incidenciarel?: JacfIncidencia[];
}