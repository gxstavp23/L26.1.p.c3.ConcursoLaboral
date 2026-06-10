export default class Cl_mAspirante {
   private _nombre: string = "";
  private _cedula: number = 0;
  private _cargo: "Desarrollador Senior"|"Gerente de Proyectos" = "Desarrollador Senior";
  private _expLaboral: number = 0;

  private _pregunta1: number = 0;
  private _pregunta2: number = 0;
  private _pregunta3: number = 0;
  private _fecha: string= "";

  constructor({cedula,nombre,cargo,expLaboral,pregunta1,pregunta2,pregunta3,fecha}: {
    cedula: number;
    nombre: string;
    cargo: "Desarrollador Senior"|"Gerente de Proyectos";
    expLaboral: number
    pregunta1:number
    pregunta2:number
    pregunta3:number
    fecha:string

    
  }) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.cargo = cargo;
    this.expLaboral = expLaboral
    this.pregunta1 = pregunta1;
    this.pregunta2 = pregunta2;
    this.pregunta3 = pregunta3;
    this.fecha = fecha;
  }

  public get cedula(): number {
    return this._cedula;
  }

  public set cedula(value: number) {
    this._cedula = value;
  }

  public get nombre(): string {
    return this._nombre;
  }

  public set nombre(value: string) {
    this._nombre = value;
  }


  public get cargo(): "Desarrollador Senior"|"Gerente de Proyectos"  {
    return this._cargo;
  }

  public set cargo(value: "Desarrollador Senior"|"Gerente de Proyectos") {
    if (value === "Desarrollador Senior" || value === "Gerente de Proyectos") {
      this._cargo = value;
    } else {
      throw new Error("Cargo debe ser 'Desarrollador Senior' o 'Gerente de Proyectos'");
    }
  }

  public get pregunta1(): number {
    return this._pregunta1;
  }

  public set pregunta1(value: number) {
    this._pregunta1 = value;
  }

  public get pregunta2(): number {
    return this._pregunta2;
  }

  public set pregunta2(value: number) {
    this._pregunta2 = value;
  }

  public get pregunta3(): number {
    return this._pregunta3;
  }

  public set pregunta3(value: number) {
    this._pregunta3 = value;
  }

  public get expLaboral(): number {
    return this._expLaboral;
  }

  public set expLaboral(value: number) {
    this._expLaboral = value;
  }

  public get fecha(): string {
    return this._fecha;
  }

  public set fecha(value: string) {
    this._fecha = value;
  }

  toJSON() {
  return {
    cedula: this.cedula,
    nombre: this.nombre,
    cargo: this.cargo,
    expLaboral: this.expLaboral,
    pregunta1: this.pregunta1,
    pregunta2: this.pregunta2,
    pregunta3: this.pregunta3,
    fecha: this.fecha
  };
}
}
