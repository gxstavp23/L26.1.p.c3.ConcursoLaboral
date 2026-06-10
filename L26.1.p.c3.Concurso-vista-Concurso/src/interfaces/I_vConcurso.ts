import Cl_mAspirante from "../models/Cl_mAspirante.js";

export interface I_vConcurso {
  Selecionados: boolean;
  mostrarAspirantes(aspirantes: Cl_mAspirante[]): void;
  onRecargar(callback: () => void): void;
  onChangeSoloSeleccionados(callback: () => void): void;
}