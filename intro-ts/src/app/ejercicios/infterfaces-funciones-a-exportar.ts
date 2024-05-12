
export interface Conocimiento {
    nombre: string;
    nivel: number;
  }
  
export function CalcularAñosDeExperiencia(conocimiento: Conocimiento[]):number {
    let experiencia:number = 0;
    conocimiento.forEach(({nivel}) => {
      experiencia += nivel
    });
    return experiencia;
  }