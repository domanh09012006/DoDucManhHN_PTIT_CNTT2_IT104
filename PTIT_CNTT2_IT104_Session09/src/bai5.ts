class DataStore<T> {
  private data: T[] = []
  add(item: T): void {
    this.data.push(item)
  }
  getAll(): T[] {
    return this.data
  }
  remove(index: number): void {
    if (index >= 0 && index < this.data.length) {
      this.data.splice(index, 1)
    }
  }
}
let numberStore = new DataStore<number>();
numberStore.add(1);
numberStore.add(2);
console.log(numberStore.getAll());
numberStore.remove(1);
console.log(numberStore.getAll());

