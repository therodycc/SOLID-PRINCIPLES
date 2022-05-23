// open close 

import { MenuOutputI } from "./interfaces/menu.interface";
import { ProductsI } from "./interfaces/product.interface";



export class Menu {
    view(products: ProductsI[], output: MenuOutputI) {
        return output.output(products)
    }
}

export class TextMenuOutput implements MenuOutputI {
    output(products: ProductsI[]) {
        return products.map(product => `${product.name} - ${product.price} - ${product.id}`);
    }
}

export class JsonMenuOutput implements MenuOutputI {
    output(products) {
        return products
    }
}

