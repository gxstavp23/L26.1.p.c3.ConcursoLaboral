
import { I_vConcurso } from "../interfaces/I_vConcurso.js";
import Cl_mConcurso from "../models/Cl_mConcurso.js";
import Cl_mAspirante from "../models/Cl_mAspirante.js";
import Cl_sAspirante from "../services/Cl_sAspirante.js";

export default class Cl_cConcurso {
  private modelo: Cl_mConcurso;
  private vista: I_vConcurso;
  constructor({ modelo, vista }: { modelo: Cl_mConcurso; vista: I_vConcurso }) {
    this.modelo = modelo;
    this.vista = vista;
    this.vista.onRecargar(() => this.btRecargarOnClick());
    this.vista.onChangeSoloSeleccionados(() => this.onChangeSoloCorrectos());
    this.btRecargarOnClick();
  }
  onChangeSoloCorrectos() {
    this.btRecargarOnClick();
  }
  async btRecargarOnClick() {
    let resultado = await Cl_sAspirante.obtenerAspirantes();
    if (resultado.ok === false) {
      alert("Error: No se pudo conectar con el servidor");
      return;
    }
    this.modelo.setAspirantes(resultado.aspirantes);
    this.vista.mostrarAspirantes(this.modelo.getAspirantes(this.vista.Selecionados));
  }
}
