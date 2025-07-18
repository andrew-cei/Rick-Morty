import type { APIResponse } from "../interfaces/ApiResponse";

export const useData = async (total: number = 4) => {
    // Rango de trabajo 1 - 16, por defecto 8
    if (total < 1 || total > 16) {
        total = 4;
    }
    // Generación de arreglo aleatorio
    const aleatorio = Array.from({length: total}, () => Math.floor(Math.random() * 800));

    // Petición REST
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`);
    const datos = (await respuesta.json()) as APIResponse[];

    // Retorno de datos
    return datos;
}