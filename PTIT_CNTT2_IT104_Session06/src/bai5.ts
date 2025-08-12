interface changeSpeed {
    speedUp: string;
    slowDown: string;
    stop: boolean;
}
class Vehicle implements changeSpeed {
    speedUp: string = "";
    slowDown: string = "";
    stop: boolean = false;
    private speed: number = 0;
    increaseSpeed() {
        let value = +this.speedUp;
        if (!isNaN(value)) {
            this.speed += value;
            console.log(`Tang toc: ${this.speed} km/h`);
        }
    }
    decreaseSpeed() {
        let value = +this.slowDown;
        if (!isNaN(value)) {
            this.speed -= value;
            if (this.speed < 0) this.speed = 0;
            console.log(`gim toc ${this.speed} km/h`);
        }
    }
    applyStop() {
        if (this.stop) {
            this.speed = 0;
            console.log(`Dung: ${this.speed} km/h`);
        }
    }
}
let car = new Vehicle();
car.speedUp = "50";
car.increaseSpeed();
car.slowDown = "20";
car.decreaseSpeed();
car.stop = true;
car.applyStop();
