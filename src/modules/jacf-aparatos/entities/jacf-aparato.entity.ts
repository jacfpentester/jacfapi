import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { JacfIncidencia } from '../../jacf-incidencias/entities/jacf-incidencia.entity';

@Entity({ name: 'jacfAparatos' })
export class JacfAparato {
    @PrimaryColumn('text')
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
        (JacfIncidencia) => JacfIncidencia.jacfaparatos,
        { cascade: true, eager: true  }
    )
    jacfincidencias?: JacfIncidencia[];
}