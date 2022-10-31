export class Experiencia {
    id?: number;
    nombreE: string;
    descripcionE: string;
    inicioE: string;
    finalizacionE: string;
    cargoE: string;
    

    constructor(nombreE: string, descripcionE: string, inicioE: string, finalizacionE: string, cargoE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.inicioE = inicioE;
        this.finalizacionE = finalizacionE;
        this.cargoE = cargoE;
    }
}
