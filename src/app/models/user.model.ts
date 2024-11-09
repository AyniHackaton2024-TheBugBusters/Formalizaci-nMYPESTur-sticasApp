export class User {
  nombre_completo: string;
  ruc: string;
  email: string;
  dni: string;
  clave_hash: string;
  fecha_nacimiento: Date;
  createdAt: Date;
  updateAt: Date;

  constructor(
    nombre_completo: string,
    ruc: string,
    email: string,
    dni: string,
    clave_hash: string,
    fecha_nacimiento: Date,
    createdAt: Date,
    updateAt: Date
  ) {
    this.nombre_completo = nombre_completo;
    this.ruc = ruc;
    this.email = email;
    this.dni = dni;
    this.clave_hash = clave_hash;
    this.fecha_nacimiento = fecha_nacimiento;
    this.createdAt = createdAt;
    this.updateAt = updateAt;
  }
}
