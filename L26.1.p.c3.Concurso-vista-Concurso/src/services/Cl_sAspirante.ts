import Cl_mAspirante from "../models/Cl_mAspirante.js";
export default class Cl_sQuiz {
  private static apiUrl: string =
    "https://6a108664d2a985707036e6c3.mockapi.io/Proyectos/ConcursoV2";

  static async obtenerAspirantes(): Promise<{
    ok: boolean;
    aspirantes: Cl_mAspirante[];
  }> {
    try {
      const respuesta = await fetch(this.apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!respuesta.ok) {
        return { ok: false, aspirantes: [] };
      }

      const data = await respuesta.json();
      return { ok: true, aspirantes: data };
      
    } catch (error: any) {
      return { ok: false, aspirantes: [] };
    }
  }
}