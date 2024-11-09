export class Tramite {
  nombre: string;
  estado: string;
  plazo: string;
  documentosAdicionales?: string;

  constructor(nombre: string, estado: string, plazo: string, documentosAdicionales?: string) {
    this.nombre = nombre;
    this.estado = estado;
    this.plazo = plazo;
    this.documentosAdicionales = documentosAdicionales;
  }
}
