function findI<T extends number>(arr: T[]): undefined | T{
    return arr.find(item => item % 2 === 0)
}
console.log(findI([1,2,3,4,5,6,7,8,9]))