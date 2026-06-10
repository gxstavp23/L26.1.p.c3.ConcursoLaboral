export interface I_vAspirante {
  get cedula(): number;
  get nombre(): string;
  get cargo(): "Desarrollador Senior"|"Gerente de Proyectos";
  get expLaboral():number
  get pregunta1():number
  get pregunta2():number
  get pregunta3():number
  get fecha():string

  onEnviar(callback: () => void): void;
}
