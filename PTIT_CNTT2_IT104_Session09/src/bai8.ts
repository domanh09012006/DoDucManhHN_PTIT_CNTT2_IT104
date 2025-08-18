function createObject<K extends string, V>(keys: K[], values: V[]): Record<K, V> {
  let result = {} as Record<K, V>
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i]
  }
  return result
}
const keys = ['name', 'age', 'email'] as const
const values = ['binhdan', 1000, 'tiviman@super.com']
console.log(createObject(keys, values))
