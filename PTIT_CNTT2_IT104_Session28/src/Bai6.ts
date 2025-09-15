type Callback = () => void

const task1 = (callback: Callback): void => {
  setTimeout(() => {
    console.log("Task 1 được thực thi");
    callback()
  }, 1000)
}
const task2 = (callback: Callback): void => {
  setTimeout(() => {
    console.log("Task 2 được thực thi");
    callback()
  }, 1500)
}
const task3 = (callback: Callback): void => {
  setTimeout(() => {
    console.log("Task 3 được thực thi! Hoàn thành");
    callback()
  }, 2000)
}
const runTasks = (): void => {
  task1(() => {
    task2(() => {
      task3(() => {
      })
    })
  })
}
runTasks();
