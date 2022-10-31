export class Educacion {
    id?: number;
    tituloE: string;
    institucionE: string;
    tipoE: string;
    inicioEdu: string;
    finalizacionEdu: string;

    constructor(tituloE: string, institucionE: string, tipoE: string, inicioEdu: string, finalizacionEdu: string){
        this.tituloE = tituloE;
        this.institucionE = institucionE;
        this.tipoE = tipoE;
        this.inicioEdu = inicioEdu;
        this.finalizacionEdu = finalizacionEdu;
    }
} 
