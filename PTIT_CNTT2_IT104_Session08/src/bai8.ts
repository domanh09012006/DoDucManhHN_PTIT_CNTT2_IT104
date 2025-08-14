function partialUpdate<T>(obj: T, updates: Partial<T>): T {
    return { ...obj, ...updates };
}
let result1 = partialUpdate(
    { name: 'binhdan', age: 30, job: 'dev' },
    { age: 31 }
);
console.log(result1);

