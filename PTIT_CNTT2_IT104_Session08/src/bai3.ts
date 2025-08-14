function reverseArray<T>(arr:T[]): T[]{
    return arr.reverse();
}
const arr = [1,2,3,4,5,6]
const str = "hihihihihe"
console.log(reverseArray(str.split(" ")).join(" "))