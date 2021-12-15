import { ProductsI } from "./product.interface";

export interface MenuOutputI {
    output(products: ProductsI[]): void
}