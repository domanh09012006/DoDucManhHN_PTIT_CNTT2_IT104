type callback = (number: number) => void
const calculate = (a: number, b: number, callback: callback) =>{
    let sum = a + b;
    callback(sum);

}
const callbackfnc = (number: number) => {
    console.log("ket qua: ", number)
}
calculate(4, 3, callbackfnc)