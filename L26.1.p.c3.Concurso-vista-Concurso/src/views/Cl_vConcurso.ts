import { I_vConcurso } from "../interfaces/I_vConcurso.js";
import Cl_mAspirante from "../models/Cl_mAspirante.js";
import Cl_mConcurso from "../models/Cl_mConcurso.js";
export default class Cl_vConcurso implements I_vConcurso {
  btRecargar: HTMLButtonElement;
  chkSoloSeleccionados: HTMLInputElement;
  tblRegistros: HTMLTableElement;
  lblCantFecha: HTMLElement

  constructor() {
    this.tblRegistros = document.getElementById(
      "evaluacion_tblRegistros"
    ) as HTMLTableElement;
    
    this.btRecargar = document.getElementById(
      "evaluacion_btRecargar"
    ) as HTMLButtonElement;
    
    this.chkSoloSeleccionados = document.getElementById(
      "evaluacion_chkSoloSeleccionados"
    ) as HTMLInputElement;

    this.lblCantFecha = document.getElementById(
      "evaluacion_lblCantFecha"
    ) as HTMLElement;

    this.chkSoloSeleccionados.onchange = () => this.onChangeSoloSeleccionados(() => {});
  }

  get Selecionados(): boolean {
    return this.chkSoloSeleccionados.checked;
  }

  onChangeSoloSeleccionados(callback: () => void): void {
    this.chkSoloSeleccionados.onchange = callback;
  }

  onRecargar(callback: () => void): void {
    this.btRecargar.onclick = callback;
  }

  mostrarAspirantes(aspirantes: Cl_mAspirante[]): void {
    this.tblRegistros.innerHTML = "";
    
    aspirantes.forEach((asp: Cl_mAspirante) => {
      this.tblRegistros.innerHTML += `<tr>
        <td>${asp.cedula}</td>
        <td>${asp.nombre}</td>
        <td>${asp.cargo}</td>
        <td>${asp.expLaboral} Años</td>
        <td>${asp.pregunta1}Pts</td>
        <td>${asp.pregunta2}Pts</td>
        <td>${asp.pregunta3}Pts</td>
        <td>${asp.fecha}</td>
        <td>${asp.puntajeTotal()}</td>
        <td>${asp.porcentajeTotal()}%</td>
        <td>${asp.Seleccionado() ? "SELECCIONADO" : "NO PASA"}</td>
      </tr>
    
    `;
    });
  }

}