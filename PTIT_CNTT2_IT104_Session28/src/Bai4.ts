type Callback = (num: number) => void;

const displayNumbers = (callback: Callback, delay: number): void => {
  let current = 1;

  const run = () => {
    callback(current);
    current++;
    setTimeout(run, delay)
  }
  run()
}
const printNumber: Callback = (num: number): void => {
  console.log("Giá trị:", num)
}
displayNumbers(printNumber, 1000)
