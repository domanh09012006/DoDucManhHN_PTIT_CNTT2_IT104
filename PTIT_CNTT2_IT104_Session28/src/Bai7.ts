type Callback = (element: number, index: number, array: number[]) => void;

function myForEach(array: number[], callback: Callback): void {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
const printInfo: Callback = (element, index, array) => {
  console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng:`, array)
}
const numbers: number[] = [1, 2, 3, 4, 5, 6];
myForEach(numbers, printInfo);
