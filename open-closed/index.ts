import { JsonMenuOutput, Menu, TextMenuOutput } from "./Menu";
import { products } from "./db/db";
import { Area, Circle, Rectangle } from "./area";
class Server {
    main() {
        this.getMenuView()
        this.getAreaView()
    }

    getMenuView() {
        const menu = new Menu()
        const textOutput = menu.view(products, new TextMenuOutput())
        const jsonOutput = menu.view(products, new JsonMenuOutput())
        console.log({ textOutput, jsonOutput })
    }

    getAreaView() {
        const area = new Area();
        const areaRectangle = area.view(new Rectangle(20, 40))
        const areaCircle = area.view(new Circle(30))
        console.log({ areaRectangle, areaCircle })
    }

}

const server = new Server()
server.main()
