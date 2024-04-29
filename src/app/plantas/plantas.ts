export class Plantas {
    id: any;
    nombre_comun:any;
    nombre_cientifico:any;
    tipo:any;
    altura_maxima:any;
    clima:any;
    sustrato_siembra:any;

    constructor(id: any, nombre_comun:any, nombre_cientifico:any, tipo:any, altura_maxima:any, clima:any, sustrato_siembra:any) {
        this.id = id;
        this.nombre_comun = nombre_comun;
        this.nombre_cientifico = nombre_cientifico;
        this.tipo = tipo;
        this.altura_maxima = altura_maxima;
        this.clima = clima;
        this.sustrato_siembra = sustrato_siembra;
    }
}
