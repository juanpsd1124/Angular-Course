export enum Color{
    rojo,
    negro,
    azul,
    verde  
}

export interface Heroe{
    nombre: string;
    vuelta: boolean;
    color: Color;
}