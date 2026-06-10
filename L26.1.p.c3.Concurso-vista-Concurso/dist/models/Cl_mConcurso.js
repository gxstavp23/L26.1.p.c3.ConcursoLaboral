import Cl_mAspirante from "./Cl_mAspirante.js";
export default class Cl_mConcurso {
    aspirantes = [];
    setAspirantes(array) {
        this.aspirantes = [];
        array.forEach((asp) => {
            this.aspirantes.push(new Cl_mAspirante({
                cedula: asp.cedula,
                nombre: asp.nombre,
                cargo: asp.cargo,
                expLaboral: asp.expLaboral,
                pregunta1: asp.pregunta1,
                pregunta2: asp.pregunta2,
                pregunta3: asp.pregunta3,
                fecha: asp.fecha
            }));
        });
    }
    getAspirantes(Seleccionados = false) {
        if (Seleccionados) {
            return this.aspirantes.filter((asp) => asp.Seleccionado());
        }
        return this.aspirantes;
    }
    getCantFecha(fecha) {
        const fechaTarget = new Date(fecha).toDateString();
        let totalCant = 0;
        this.aspirantes.forEach((asp) => {
            if (asp.fecha == "2026-06-03") {
                return totalCant++;
            }
        });
    }
}
//# sourceMappingURL=Cl_mConcurso.js.map