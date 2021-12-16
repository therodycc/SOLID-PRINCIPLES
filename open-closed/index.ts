import { JsonMenuOutput, Menu, TextMenuOutput } from "./Menu";
import { products } from "./db/db";
import { Area, Circle, Rectangle } from "./area";
class Server {
    main() {
        const menu = new Menu()
        const textOutput = menu.view(products, new TextMenuOutput())
        const jsonOutput = menu.view(products, new JsonMenuOutput())
        console.log(textOutput)
        console.log(jsonOutput)

        const area = new Area();
        const rectangle = new Rectangle(20, 40)
        const circle = new Circle(30)

        const areaRectangle = area.view(rectangle)
        const areaCircle = area.view(circle)
        console.log({ areaRectangle })
        console.log({ areaCircle })
    }
}

const server = new Server()
server.main()
