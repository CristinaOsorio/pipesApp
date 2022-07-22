export interface Product {
    category: Category;
    code: string;
    isActive: boolean;
    name: string;
    quantity: number;
}

export enum Category {
    ropa, calzado, accesorios
}