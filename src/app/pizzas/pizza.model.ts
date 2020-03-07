export class Pizza {
    constructor() { }
    _id: string;
    name: string;
    ingredients: string[];
    type: PizzaType;
    size: PizzaSize;
    price: number
}

export enum PizzaType { premium, signature, favorite }

export enum PizzaSize { small, medium, large }