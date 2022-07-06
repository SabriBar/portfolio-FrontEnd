export class persona{
    id?:number;
    nombre: String;
    apellido: String;
    titulo: String;
    provincia: String;
    correoElectronico: String;
    fechaNacimiento: String;
    acercaDeMi: String;


    constructor(nombre: String, apellido: String, titulo: String, provincia: String, correoElectronico: String, fechaNacimiento: String, acercaDeMi: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.provincia = provincia;
        this.correoElectronico = correoElectronico;
        this.fechaNacimiento = fechaNacimiento;
        this.acercaDeMi = acercaDeMi;
    }
}


