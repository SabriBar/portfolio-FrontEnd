export class Proyecto {

    id?: number;
    nombreP: string;
    linkP: string;
    descripcionP: string;
    fechaP: string;

    constructor(nombreP: string, linkP: string, descripcionP: string, fechaP: string) {
        this.nombreP = nombreP;
        this.linkP = linkP;
        this.descripcionP = descripcionP;
        this.fechaP = fechaP;

    }

}