import { JsonMenuOutput, Menu, TextMenuOutput } from "./Menu";
import { products } from "./db/db";


const menu = new Menu()
const info = menu.view(products, new JsonMenuOutput())
console.log(info)