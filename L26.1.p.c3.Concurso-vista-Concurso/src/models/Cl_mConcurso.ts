import Cl_mAspirante from "./Cl_mAspirante.js";

export default class Cl_mConcurso {
  private aspirantes: Cl_mAspirante[] = [];

  setAspirantes(array: Cl_mAspirante[]) {
    this.aspirantes = [];
    array.forEach((asp) => {
      this.aspirantes.push(
        new Cl_mAspirante({
          cedula:asp.cedula,
          nombre: asp.nombre,
          cargo: asp.cargo,
          expLaboral: asp.expLaboral,
          pregunta1: asp.pregunta1,
          pregunta2:asp.pregunta2,
          pregunta3: asp.pregunta3,
          fecha:asp.fecha
        })
      );
    });
  }

  getAspirantes(Seleccionados: boolean = false): Cl_mAspirante[] {
    if (Seleccionados) {
      return this.aspirantes.filter((asp) => asp.Seleccionado());
    } 
    
    return this.aspirantes;
  }

  getCantFecha(fecha:string):any{

    const fechaTarget = new Date(fecha).toDateString();
    let totalCant = 0;
     
    this.aspirantes.forEach((asp) =>{
      if(asp.fecha == "2026-06-03"){
     return totalCant ++
    }
    })

  }
}