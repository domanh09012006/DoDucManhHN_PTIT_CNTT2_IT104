function flatten<T>(arr: T[][]): T[] {
    let result: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[i][j]);
        }
    }
    return result;
}
let numbers = [[1, 2], [3, 4], [5, 6]];
console.log(flatten(numbers));
