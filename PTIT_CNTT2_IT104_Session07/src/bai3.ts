abstract class Animal{
    public name: string;
    constructor(name: string){
        this.name = name;
    }
    abstract makeNoise(): void;
    printName(): string{
        return `${this.name}: `;
    }
}
class Dog extends Animal{
    makeNoise(): void {
        console.log("gau gau");
    }
}
class Cat extends Animal{
    makeNoise(): void {
        console.log("Meo meo");
    }
}
let cho = new Dog("Pitbull");
let meo = new Cat("Muop");
console.log(cho.printName());
cho.makeNoise();
console.log(meo.printName());
meo.makeNoise();