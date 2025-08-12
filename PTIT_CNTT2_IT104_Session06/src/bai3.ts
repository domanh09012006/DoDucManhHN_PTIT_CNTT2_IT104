abstract class Animal {
    // Method thuong: hanh vi giong nhau
    eat(): void {
        console.log("Animal dang an");
    }
    // Abstract method: hanh vi khac nhau, bat buoc lop con phai dinh nghia
    abstract makeSound(): void;
}
// Lop con: cho
class Dog extends Animal {
    makeSound(): void {
        console.log("Gau gau");
    }
}
// Lop con: meo
class Cat extends Animal {
    makeSound(): void {
        console.log("Meo meo");
    }
}
