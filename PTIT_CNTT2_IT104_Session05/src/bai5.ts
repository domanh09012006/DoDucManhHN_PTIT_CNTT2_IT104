class Rectangle {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    public getWidth(): number {
        return this.width;
    }
    public getHeight(): number {
        return this.height;
    }
    public setWidth(width: number){
        this.width = width;
    }
    public setHeight(height: number){
        this.height = height;
    }
    public getArea(): number {
        return this.width * this.height;
    }
    public getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
let rect = new Rectangle(5, 3);
console.log(`Chieu rong: ${rect.getWidth()}`);
console.log(`Chieu dai: ${rect.getHeight()}`);
console.log(`Chu vi: ${rect.getPerimeter()}`);
console.log(`Dien tich: ${rect.getArea()}`);
rect.setWidth(8);
rect.setHeight(6);
console.log(`Chieu rong: ${rect.getWidth()}`);
console.log(`Chieu dai: ${rect.getHeight()}`);
console.log(`Chu vi: ${rect.getPerimeter()}`);
console.log(`Dien tich: ${rect.getArea()}`);
