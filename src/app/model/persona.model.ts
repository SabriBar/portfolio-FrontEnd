export class persona{
    id?:number;
    nombre: string;
    apellido: string;
    titulo: string;
    provincia: string;
    correoElectronico: string;
    acercaDeMi: string;
    url: string;


    constructor(nombre: string, apellido: string, titulo: string, provincia: string, correoElectronico: string, acercaDeMi: string, url: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.provincia = provincia;
        this.correoElectronico = correoElectronico;
        this.acercaDeMi = acercaDeMi;
        this.url = url;
    }
}


