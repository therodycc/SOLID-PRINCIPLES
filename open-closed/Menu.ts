// open close 

import { MenuOutputI } from "./interfaces/menuOutput.interface";
import { ProductsI } from "./interfaces/product.interface";



export class Menu {
    view(products: ProductsI[], output: MenuOutputI) {
        return output.output(products)
    }
}

export class TextMenuOutput implements MenuOutputI {
    output(products: ProductsI[]) {
        return products.map(product => {
            return `${product.name} - ${product.price} - ${product.id}`
        });
    }
}

export class JsonMenuOutput implements MenuOutputI {
    output(products) {
        return products.map(product => {
            return product
        });
    }
}

