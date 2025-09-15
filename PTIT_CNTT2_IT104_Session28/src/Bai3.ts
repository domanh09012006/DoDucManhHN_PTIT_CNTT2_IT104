type Callback = (num: number) => void;

const processArray = (arr: number[], callback: Callback): void => {
  arr.forEach((num, index) => {
    setTimeout(() => {
      callback(num);
    }, (index + 1) * 1000);
  })
}

const printNumber: Callback = (num: number): void => {
  console.log("Phan tu thu:", num);
}

processArray([1,2,3,4,5], printNumber);
