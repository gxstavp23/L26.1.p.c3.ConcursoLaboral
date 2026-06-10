import { I_vAspirante} from "../interfaces/I_vAspirante.js";

export default class Cl_vAspirante implements I_vAspirante {
  vista: HTMLElement | null;
  inCedula: HTMLInputElement;
  inNombre: HTMLInputElement;
  inCargo: HTMLSelectElement;
  inExpLaboral:HTMLInputElement
  inPregunta1: HTMLFieldSetElement;
  inPregunta2: HTMLFieldSetElement;
  inPregunta3: HTMLFieldSetElement;
  inFecha: HTMLInputElement;
  btEnviar: HTMLButtonElement;

  constructor() {
    this.vista = document.getElementById("aspirante") as HTMLElement;
    this.inCedula = document.getElementById("aspirante_inCedula",) as HTMLInputElement;
    this.inNombre = document.getElementById("aspirante_inNombre",) as HTMLInputElement;
    this.inCargo = document.getElementById("aspirante_inCargo",) as HTMLSelectElement;
    this.inExpLaboral = document.getElementById("aspirante_inExpLaboral",) as HTMLInputElement;
    this.inPregunta1 = document.getElementById("aspirante_inPregunta1",) as HTMLFieldSetElement;
    this.inPregunta2 = document.getElementById("aspirante_inPregunta2",) as HTMLFieldSetElement;
    this.inPregunta3 = document.getElementById("aspirante_inPregunta3",) as HTMLFieldSetElement;
    this.inFecha = document.getElementById("aspirante_inFecha") as HTMLInputElement;
    this.btEnviar = document.getElementById("aspirante_btEnviar",) as HTMLButtonElement;
  }
  onEnviar(callback: () => void): void {
    this.btEnviar.onclick = callback;
  }
  get cedula(): number {
    return parseInt(this.inCedula.value.trim()) || 0;
  }
  get nombre(): string {
    return this.inNombre.value.trim();
  }

  get cargo(): "Desarrollador Senior" | "Gerente de Proyectos" {
    return this.inCargo.value.trim() as "Desarrollador Senior" | "Gerente de Proyectos";
  }

get pregunta1(): number {
  const radio = this.inPregunta1.querySelector('input[name="p1"]:checked') as HTMLInputElement;
  return radio ? parseInt(radio.value) : 0;
}

get pregunta2(): number {
  const radio = this.inPregunta2.querySelector('input[name="p2"]:checked') as HTMLInputElement;
  return radio ? parseInt(radio.value) : 0;
}

get pregunta3(): number {
  const radio = this.inPregunta3.querySelector('input[name="p3"]:checked') as HTMLInputElement;
  return radio ? parseInt(radio.value) : 0;
}

get expLaboral(): number {
    return parseInt(this.inExpLaboral.value.trim()) || 0;
  }

get fecha(): string {
  return this.inFecha.value.trim();
}
  
}
