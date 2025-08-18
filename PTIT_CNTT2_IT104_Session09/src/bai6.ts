function firstMatch<T>(arr: T[], predicate: (a: T) => boolean): T | undefined {
  for (let element of arr) {
    if (predicate(element)) {
      return element
    }
  }
  return undefined
}
console.log(firstMatch([1,2,3,0], (n) => n % 2 === 0))
