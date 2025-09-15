type FilterCallback = (element: number, searchValue: number) => boolean;

function myFilter(array: number[], searchValue: number, callback: FilterCallback): number[] {
  const result: number[] = []
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], searchValue)) {
      result.push(array[i])
    }
  }
  console.log("Mảng đã lặp:", array);
  return result
}
const isEqual: FilterCallback = (element, searchValue) => {
  return element === searchValue
}
const numbers: number[] = [1, 2, 2, 3, 4, 5, 6]
const found1 = myFilter(numbers, 2, isEqual);
console.log(found1)
const found2 = myFilter(numbers, 10, isEqual);
console.log(found2)
