export const CATEGORIAS = ["Bebidas calientes", "Bebidas frías", "Panaderia", "Postres"];
export type Categoria = typeof CATEGORIAS[number];
export const UNIDADES_MINIMAS = 5;
export interface Producto {
    id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: Categoria;
    unidades: number;
}
export type ProductoDatos = Omit<Producto, "id">;