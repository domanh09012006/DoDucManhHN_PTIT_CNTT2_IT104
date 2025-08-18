function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 }
}
let person = { name: "binh" }
let job = { role: "dan" }
let merged = mergeObjects(person, job)
console.log(merged)
