interface ShapeI {
    area(): number
}

export class Area {
    view(shape: ShapeI) {
        return shape.area();
    }
}

export class Rectangle implements ShapeI {

    private A: number
    private B: number

    constructor(a: number, b: number) {
        this.A = a;
        this.B = b;
    }
    
    area(): number {
        return this.B * this.A;
    }

}

export class Circle implements ShapeI {
    private Radius: number

    constructor(radius: number) {
        this.Radius = radius;
    }
    area(): number {
        return this.Radius * this.Radius * Math.PI;
    }

}

