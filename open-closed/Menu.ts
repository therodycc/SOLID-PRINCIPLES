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
            return `${product.id} - ${product.name} - ${product.price}`
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

