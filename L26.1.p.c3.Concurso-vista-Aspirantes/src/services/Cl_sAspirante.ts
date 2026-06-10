import Cl_mAspirante from "../models/Cl_mAspirante.js";
class Cl_sAspirante {
  private static apiUrl: string =
    "https://6a108664d2a985707036e6c3.mockapi.io/Proyectos/ConcursoV2";

  static async guardarRegistro(
    nuevoAspirante: Cl_mAspirante,
  ): Promise<{ ok: boolean; mensaje: string }> {
    try {
      const respuesta = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoAspirante.toJSON()),
      });

      if (!respuesta.ok) {
        return { ok: false, mensaje: "Error al guardar el registro" };
      }
      const data = await respuesta.json();
      return { ok: true, mensaje: "Registro guardado con ID: " + data.id };
    } catch (error: any) {
      return {
        ok: false,
        mensaje: "Error al guardar el registro: " + error.message,
      };
    }
  }

  static async existeAspirante(
    cedula: number,
  ): Promise<{ ok: boolean; existe: boolean }> {
    try {
      const respuesta = await fetch(`${this.apiUrl}?cedula=${cedula}`);

      // ¡El truco para domar a MockAPI!
      // Si el servidor responde 404, la conexión fue exitosa, pero no hay resultados.
      if (respuesta.status === 404) {
        return { ok: true, existe: false };
      }

      // Si falla por un error real del servidor (ej. 500)
      if (!respuesta.ok) {
        return { ok: false, existe: false };
      }

      // Si responde 200 (OK), parseamos el JSON y verificamos si hay registros
      const data = await respuesta.json();
      return { ok: true, existe: data.length > 0 };
    } catch (error: any) {
      // Solo caemos aquí si hay un error real de red (sin internet, etc.)
      return { ok: false, existe: false };
    }
  }
}
export default Cl_sAspirante;
